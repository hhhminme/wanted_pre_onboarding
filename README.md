# 원티드 프리온보딩 코스 구현과제 - 허민

✨[구현과제 바로 보러 가기 링크](https://wanted-pre-onboarding-danphv3pp-hhhminme.vercel.app/)✨

# **목차**

1. [**프로젝트**](#프로젝트)
   1. [사용한 기술](#2-사용한-기술)
   2. [구현 과제 설명](#1-구현과제-설명)
   3. [설치방법](#3-설치방법)
   4. [디렉토리 구조](#4-디렉토리-구조)
2. [**깃 컨벤션**](#깃-컨벤션)
   1. [커밋 컨벤션](#1-커밋-컨벤션)
   2. [브랜칭 전략](#2-브랜칭-전략)

# **프로젝트**

## **1. 사용한 기술**

![Untitled-Page-2](https://user-images.githubusercontent.com/54930877/152672460-0e535109-1e9c-4d88-972d-c2ab8d510773.jpg)

### **React/Javascript**

프리온보딩 권장 기술인 Javascript와 React를 중심으로 개발하였습니다.
ES6+ 문법을 최대한 활용하여 개발하고자 노력했습니다. Class Component가 아닌 Functional Component를 이용하였고 Hooks 을 활용하여 개발을 하였습니다.

### **Code Convention/Deploy**

web Accessability 표준에 맞도록 시멘틱 엘레멘트를 지킬려 노력하였습니다. Cross Browser Test를 하였으며, 모바일 환경에서도 이용할 수 있는 반응형 웹페이지를 만들기 위해 노력했습니다.

구현과제의 양이 많지 않고 컴포넌트 구조가 복잡하지 않아 [Tailwind CSS](https://tailwindcss.com/)를 활용하였습니다.
CSS 속성은 [Mozilla에서 제안한 CSS 속성 기술 순서](http://milooy.github.io/TIL/CSS/css-property-order.html#intro)를 참고하여 정리하였습니다.

읽기 쉬운 코드를 위해 code Formatter 역할을 해주는 [Prettier](https://prettier.io/)와 [ESLint](https://eslint.org/)를 이용하여 표준에 맞는 코드컨벤션을 지키려 노력하였습니다.

구현과제 Demo 확인을 위한 Headless CMS인 [Vercel](https://vercel.com/)을 이용하여 배포하였습니다.

---

## 2. **구현과제 설명**

[구현과제 바로 보러가기 링크](https://wanted-pre-onboarding-danphv3pp-hhhminme.vercel.app/)

### 1. **Toggle**

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/54930877/152672485-8d6c3c7d-83dc-444b-8d52-f02a2213c2d6.gif)

- **구현한 방법과 이유**

  input 태그의 Type을 Checkbox로 하여 개발하였습니다. screen reader에도 잘 동작할 수 있도록 시멘틱 엘레먼트를 준수하였습니다. label 태그 내 input를 넣어줌으로서 label을 클릭하였을 떄도 동일한 기능이 동작하도록 하였습니다.

  Toggle은 외부의 Toggle Box와 내부의 Toggle Slider로 구분했습니다. [Tailwind의 JIT(just in time) mode active](https://v2.tailwindcss.com/docs/just-in-time-mode)를 활용하여 Toggle Box가 클릭되었을때 움직이고 Toggle Slider의 배경색이 바꾸도록 하였습니다.

  이때 Toggle Switch 가 "ON", "OFF" 인지 확인하기 위해 useState hook과 [Conditional(Ternary) Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)를 사용하였습니다.

- **구현하면서 어려웠던점과 해결**

  라이브러리로 사용하던 Toggle 버튼을 Pure CSS로 구현하는게 어려웠습니다. useRef 등을 활용하여 toggle의 clickEvent를 감지하여 DOM 객체의 CSS element를 바꾸는 방법보단 Pure CSS로 개발하는 것이 더욱 직관적이라고 생각하여 Tailwind의 peer's class를 사용했습니다.

  label 태그가 toggle 버튼을 누를때마다 width 값이 계속 미세하게 변하여 좌우로 왔다갔다 합니다. label 태그가 차지하는 width를 고정하는 방법을 찾아보고 있습니다.

### 2. **Modal**

![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/54930877/152672495-618aa717-5232-4124-b869-9c9e14f0e9f4.gif)

- **구현한 방법과 이유**

  useState hook을 활용하여 Open Modal Button의 클릭유무를 확인하였고 [Conditional(Ternary) Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)를 통해 아래와 같은 로직으로 코드가 작동하도록 구현했습니다.

  ```
  Open Modal button이 클릭됨 ? modal창 열림 : null
  ```

- **구현하면서 어려웠던점과 해결**

  modal의 위치를 컴포넌트 가운데가 아닌 화면 가운데 두는 것이 어려웠습니다. 이를 해결하고자 CSS property 중 [inset](https://tailwindcss.com/docs/top-right-bottom-left#placing-a-positioned-element)을 활용하여 부모 요소의 가운데 오도록 레이아웃을 만들었스빈다.

  반응형으로 구현시 modal 밖으로 content가 튀어나오는걸 막는게 어려웠습니다. 이를 CSS property 중 [overflow](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-x)를 통해 해결하였습니다.

### 3. **Tab**

![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/54930877/152672498-63e13395-754c-4be0-a6e3-675b3f999406.gif)

- **구현한 방법과 이유**

  Tab 목록을 객체로 매핑해주었습니다. 코드의 반복되는 list 를
  [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)을 통해 표현해주었습니다. 각 list에는 ClickEventHandler()를 두어 어떤 탭이 눌렸는지 구분하였습니다. 이때 id값은 useState hook을 통해 관리하습니다. 컴포넌트가 바뀌어야 할 부분에 객체의 key값으로 객체의 value를 가져오는 형태로 만들었습니다.

- **구현하면서 어려웠던점과 해결**

  반복되는 li 태그를 어떻게 리팩토링 할지 고민하였고 [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)을 사용하였습니다.
  탭 클릭 시 탭 배경의 색을 변경해주기 위해 [:active](https://developer.mozilla.org/en-US/docs/Web/CSS/:active)를 사용해주었습니다. 문제는 클릭한 순간만 색이 바뀌어서 useState hook을 이용하여 클릭된 탭의 상태를 관리하였습니다.

### 4. **Tag**

![ezgif com-gif-maker (4)](https://user-images.githubusercontent.com/54930877/152672507-bd0a130d-26e2-489f-8ca7-90e9f24ee5cf.gif)

- **구현한 방법과 이유**

  useState hook을 통해 사용자가 입력한 내역을 관리합니다. 이때 사용자에게 보여지는 tag와 저장한 상태를 매핑해주는 방식으로 구현하였습니다.

  태그를 저장할때는 [Spread syntax(...)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) 통해 항상 마지막 위치에 저장되도록 하였습니다.

  태그를 삭제할때는 [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)를 사용하여 사용자가 제거하려는 태그의 인덱스와 일치하는 태그를 찾도록 했습니다. 발견되면 필터링되고 나머지 태그는 [Spread syntax(...)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)를 이용하여 다시 태그 상태를 업데이트합니다.

- **구현하면서 어려웠던점과 해결**

  input focus 외부 div 태그의 border color가 바뀌지 않아 어려움을 겪었습니다. 그래서 input에 outline을 없애고 input과 태그를 모두 감싸고 있는 div 태그에 [:focus-within](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within)을 활용하여 border가 변경되도록 구현하였습니다.

  또한 현재 동일한 텍스트가 3개 들어왔을 경우 가장 먼저 입력한 태그를 삭제해야만 동일 텍스트의 태그가 모두 삭제되는 이슈가 있습니다. 현재 의심 되는 점은 사용자가 제거하려는 태그의 인덱스와 일치하는 태그를 찾도록 해서 동일한 값이 두개 있을 경우, 현재 선택된 태그의 인덱스보다 앞에 있는 태그에 동일한 값이 존재하기 때문에 가장 먼저 생성된 태그를 삭제해야만 원하는 결과가 이루어진다고 생각했습니다.

  이에 대해선 입력 시 중복을 방지하도록 고려하여 addTags() 함수를 리팩토링 하도록 하겠습니다.

  ```javascript
  const removeTags = (idx) => {
    setTags([...tags.filter((tag) => tags.indexOf(tag) !== idx)]);
  };
  ```

### 5. **AutoComplete**

구현 중 입니다.

- **구현한 방법과 이유**
- **구현하면서 어려웠던점과 해결**

### 6. **ClickToEdit**

![ezgif com-gif-maker (5)](https://user-images.githubusercontent.com/54930877/152672510-a7303d5e-36bd-4233-950a-66727e1e497d.gif)

- **구현한 방법과 이유**
  변경하고자 하는 요소에 [DoubleClickEvent](https://medium.com/trabe/prevent-click-events-on-double-click-with-react-with-and-without-hooks-6bf3697abc40)가 발생하면 useState hook을 통해 해당 요소의 수정가능 상태를 관리합니다. 그리고 [Conditional(Ternary) Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)를 통해 값에 따라 display되는 요소를 달리하였습니다.
  ```
   요소가 수정가능 상태값이 true라면 ? input 요소가 보인다 : 요소의 값이 보인다.
  ```
- **구현하면서 어려웠던점과 해결**
  [DoubleClickEvent](https://medium.com/trabe/prevent-click-events-on-double-click-with-react-with-and-without-hooks-6bf3697abc40)가 존재 하는지 처음 알았습니다. 그래서 이를 해결하기 위해 구글링을 하여 해당 문제를 해결하였습니다.

---

## **3. 설치방법**

[구현과제 바로 보러 가기](https://wanted-pre-onboarding-danphv3pp-hhhminme.vercel.app/)

```Bash
$ git clone https://github.com/hhhminmewanted_pre_onboarding.git
$ cd custom-component
$ npm install
$ npm start
```

---

## **4. 디렉토리 구조**

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

# **깃 컨벤션**

## **1. 커밋 컨벤션**

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

**커밋 시 아래의 규칙을 지켰습니다.**

1. 제목은 명령문으로 한다.
2. 제목 끝에 마침표(.)를 쓰지 않는다.
3. 제목과 본문을 한 줄 띄워 분리한다.
4. 본문은 “어떻게" 보다 “무엇을", “왜" 설명한다.
5. 본문에 여러줄의 메시지를 작성할 땐 “-”로 구분한다.

---

## **2. 브랜칭 전략**

![Untitled-Page-1](https://user-images.githubusercontent.com/54930877/152672453-8ee9899c-61d8-4771-bee1-1a49e13b3cee.jpg)

**Main branch**

- 배포 가능한 상태만을 관리하는 브랜치입니다. Vercel과 배포 파이프라인이 연결되어 바로 배포된 도메인으로 확인할 수 있게 하였습니다.
  - 새로운 Feature가 추가되었을때 1.0 → 2.0 과 같이 정수 버전을 릴리즈 했습니다.
  - 새로운 기능이 추가되지 않고 버그 및 디자인 수정의 경우 1.0 → 1.1 과 같이 소수점 버전을 릴리즈 했습니다.

**Develop branch**

- 다음에 배포할 것을 개발하는 브랜치입니다.
- develop 브랜치는 통합 브랜치의 역할을 하며, 평소에는 이 브랜치를 기반으로 개발을 진행합니다.

**Feature branch**

- 기능을 개발하는 브랜치로, develop 브랜치로부터 분기합니다.
- feature 브랜치는 그 기능을 다 완성할때까지 유지하고, 다 완성되면 Develop 브랜치로 merge합니다.
- merge 후 배포가 완료된 브랜치는 바로 삭제 하고 있습니다.
