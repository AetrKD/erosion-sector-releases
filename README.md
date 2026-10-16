# Erosion Sector · 모드 배포

Minecraft 1.21.1 / NeoForge용 Erosion Sector 바이너리 저장소입니다. 모드 소스 코드와 배포 서명 개인키는 공개하지 않습니다.

- [모드 다운로드](https://github.com/AetrKD/erosion-sector-releases/releases/latest)
- [내 클리어 기록](https://erosion-sector-editor.vercel.app/clears/)
- [스테이지 에디터](https://erosion-sector-editor.vercel.app/)

## 개인 클리어 기록 · 0.4.4부터

게임 내 파일 변조 검사와 상세 임무 기록 업로드를 제거했습니다. 웹에는 플레이어 계정 UUID·스테이지 고유 ID·이름·챕터·미션 코드·최초 완료 시각만 저장합니다. 실패·플레이 시간·점수·장비·모드 해시는 보내지 않습니다.

같은 계정으로 새 월드를 만들거나 다른 사람의 방에 들어가면 클리어 목록을 불러옵니다. 임무 단말기의 **내 클리어 기록**, 명령어 **/erosionsector clears**, 시설 터미널의 **CLEARS**로 확인하세요. 화면의 **웹에서 보기**로 브라우저에서도 조회할 수 있습니다.

이름이 아니라 서버에서 사용하는 Minecraft UUID로 구분합니다. 온라인·오프라인 모드를 오가며 UUID가 달라지면 별도 기록입니다. 경쟁 기록 검증이나 별도 계정 로그인은 제공하지 않으며 UUID를 아는 사람은 해당 완료 목록을 조회할 수 있습니다.

인터넷에 연결되지 않아도 완료를 기기에 보존하고 나중에 동기화합니다. config/erosionsector/progress/settings.json의 syncEnabled로 서버의 동기화를 끌 수 있습니다. 기존 로컬 results 파일은 업로드하지 않습니다.

다른 제작자의 스테이지도 미리 웹에 등록할 필요가 없습니다. ID가 같으면 같은 스테이지이고 이름이 같아도 ID가 다르면 따로 기록합니다. 에디터의 새 프로젝트와 예시는 새 ID를 발급하며, 공유 프로젝트를 별도 작품으로 만들려면 스테이지 설정의 **다른 스테이지로 복제**를 사용하세요.

## 다운로드 파일 확인 (선택)

배포 파일 확인용 Ed25519 서명과 SHA-256 파일은 계속 제공합니다. 게임의 변조 검사나 기록 인증에는 사용하지 않습니다. 릴리스에서 JAR, release.json, public-key.json, verify.mjs를 내려받고 Node.js로 실행하세요.

    node verify.mjs erosionsector-VERSION.jar release.json public-key.json

공개키 지문:

    903d230cbbd661d0279ac4e3d32abc9a5695ae2ad59e57c665d72de4fb96632b

TaCZ·Carry On 등 다른 모드의 JAR는 포함하지 않습니다.
