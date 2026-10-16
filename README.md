# Erosion Sector · 공식 배포

Minecraft 1.21.1 / NeoForge용 Erosion Sector 모드의 공식 바이너리 저장소입니다. 모드 소스 코드와 서명 개인키는 공개하지 않습니다.

- [최신 모드 다운로드](https://github.com/AetrKD/erosion-sector-releases/releases/latest)
- [공식 배포 정보](https://erosion-sector-editor.vercel.app/releases/)
- [임무 기록 조회](https://erosion-sector-editor.vercel.app/records/)
- [스테이지 에디터](https://erosion-sector-editor.vercel.app/)

## 파일 확인

릴리스에서 JAR, release.json, public-key.json, verify.mjs를 내려받고 Node.js로 실행합니다.

```text
node verify.mjs erosionsector-VERSION.jar release.json public-key.json
```

배포 명세의 Ed25519 서명과 JAR의 SHA-256을 모두 확인합니다. 공개키 지문은 다음과 같습니다. 검증에 사용할 공개키는 신뢰하는 경로의 이 지문과 대조하세요.

```text
903d230cbbd661d0279ac4e3d32abc9a5695ae2ad59e57c665d72de4fb96632b
```

각 릴리스에는 원본 명세 manifest.json, 분리된 서명 manifest.json.sig, 묶음 release.json, SHA256SUMS.txt도 제공합니다. 공개키는 JAR 내부에도 포함되어 서버·월드를 열 때 파일을 확인합니다. 모드를 자동 설치하거나 실행 중 JAR를 교체하지 않습니다.

## 임무 기록

임무 결과는 로컬 results 폴더에 보존하고 익명으로 업로드합니다. 플레이어 이름·UUID와 로컬 경로는 업로드하지 않습니다. 게임 채팅의 기록 보기 링크로 조회할 수 있습니다. 업로드는 config/erosionsector/records.json의 uploadEnabled로 끌 수 있습니다.

모든 기록은 플레이한 서버의 자체 보고입니다. 공식 파일의 해시가 일치해도 실행 중 변조나 임무 결과의 정당성을 원격으로 인증한 것은 아닙니다. 경쟁 순위 인증 기능은 제공하지 않습니다.

TaCZ, Carry On 등 다른 모드의 JAR는 이 배포에 포함되지 않습니다.
