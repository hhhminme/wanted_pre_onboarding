# 프리온보딩 프론트엔드 코스 구현과제 ✨

[구현과제 바로 보러 가기](https://wanted-pre-onboarding-danphv3pp-hhhminme.vercel.app/)

# 목차

1. **깃 컨벤션 설명**
   1. 커밋 컨벤션
   2. 브랜칭 전략
2. **프로젝트 설명**
   1. 구현 과제 설명
   2. 사용한 기술
   3. 설치방법
   4. 디렉토리 구조

# 협업 컨벤션

## 1. 커밋 컨벤션

**<타입> 리스트**

```
- feat : 기능 (새로운 기능)
- fix : 버그 (버그 수정)
- refactor : 리팩토링
- style : 스타일 (코드 형식. 세미콜론 추가 : 비즈니스 로직에 변경 없음)
- docs : 문서 (문서 추가, 수정, 삭제)
- test : 테스트 (테스트 코드 추가, 수정, 삭제 : 비즈니스 로직에 변경 없)
- chore : 기타 변경사항, 셋팅 ㅗ간련 (빌드 스크립트 수정 등)
```

1. 제목은 명령문으로 한다.
2. 제목 끝에 마침표(.)를 쓰지 않는다.
3. 제목과 본문을 한 줄 띄워 분리한다.
4. 본문은 “어떻게" 보다 “무엇을", “왜" 설명한다.
5. 본문에 여러줄의 메시지를 작성할 땐 “-”로 구분한다.

## 2. 브랜칭 전략

**Main branch**

- 배포 가능한 상태만을 관리하는 브랜치입니다. Vercel과 배포 파이프라인이 연결되어 바로 배포된 도메인으로 확인할 수 있게 하였습니다.
  - 새로운 Feature가 추가되었을때 1.0 → 2.0 과 같이 정수 버전을 릴리즈 합니다.
  - 새로운 기능이 추가되지 않고 버그 및 디자인 수정의 경우 1.0 → 1.1 과 같이 소수점 버전을 릴리즈 합니다.

**Develop branch**

- 다음에 배포할 것을 개발하는 브랜치입니다.
- develop 브랜치는 통합 브랜치의 역할을 하며, 평소에는 이 브랜치를 기반으로 개발을 진행합니다.

**Feature branch**

- 기능을 개발하는 브랜치로, develop 브랜치로부터 분기합니다.
- feature 브랜치는 그 기능을 다 완성할때까지 유지하고, 다 완성되면 Develop 브랜치로 merge합니다.
- merge 후 배포가 완료된 브랜치는 바로 삭제 하고 있습니다.

# 프로젝트 설명

[구현과제 바로 보러 가기](https://wanted-pre-onboarding-danphv3pp-hhhminme.vercel.app/)

## 1. 구현과제 설명

1. **Toggle**

2. **Modal**

3. **Tab**

4. **Tag**

5. **AutoComplete**

6. **ClickToEdit**

## 2. 사용한 기술

## 3. 설치방법

```Bash
$ git clone https://github.com/hhhminmewanted_pre_onboarding.git
$ cd custom-component
$ npm install
$ npm start
```

## 4. 디렉토리 구조

```Bash
├── README.md
└── custom-component
    ├── README.md
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── public
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── logo192.png
    │   ├── logo512.png
    │   ├── manifest.json
    │   └── robots.txt
    ├── src
    │   ├── App.js
    │   ├── App.test.js
    │   ├── component
    │   ├── index.css
    │   ├── index.js
    │   ├── reportWebVitals.js
    │   └── setupTests.js
    └── tailwind.config.js
```
