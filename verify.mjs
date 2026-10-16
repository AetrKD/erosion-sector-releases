import {readFileSync,statSync} from 'node:fs';
import {createHash,createPublicKey,verify} from 'node:crypto';
import path from 'node:path';
try{
  const [jar,envelopeFile,keyFile='public-key.json']=process.argv.slice(2);if(!jar||!envelopeFile)throw Error('Usage: node verify.mjs <jar> <release.json> [public-key.json]');
  const identity=JSON.parse(readFileSync(keyFile,'utf8')),envelope=JSON.parse(readFileSync(envelopeFile,'utf8'));const der=Buffer.from(identity.publicKey,'base64');const hash=data=>createHash('sha256').update(data).digest('hex');
  if(hash(der)!==identity.keyId||envelope.algorithm!=='Ed25519')throw Error('Unexpected signing key or algorithm');
  const data=Buffer.from(envelope.payload,'base64');if(!verify(null,data,createPublicKey({key:der,format:'der',type:'spki'}),Buffer.from(envelope.signature,'base64')))throw Error('Invalid manifest signature');
  const m=JSON.parse(data.toString('utf8'));if(m.schema!=='erosionsector.release/1'||m.modId!=='erosionsector'||m.keyId!==identity.keyId||path.basename(jar)!==m.filename||statSync(jar).size!==m.size||hash(readFileSync(jar))!==m.sha256)throw Error('Artifact does not match the signed manifest');
  console.log('Ed25519 signature and SHA-256 verified: '+m.version+'\nTrusted key fingerprint: '+identity.keyId);
}catch(e){console.error(e.message);process.exitCode=1;}
