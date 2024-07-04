# Study_React

React를 공부하는 파일 모음

## 파일 분류

- 17_0_2 Base : 노마드코더 기초 리엑트 강의를 통한 공부
- 18 : Ubase강의를 통한 강의 학습

## 환경

CRA
React v17.0.2
React-Router-Dom v5

## 17환경 설정

18 환경은 17 환경과 달라 다음과 같은 설정이 필요  
(CRA) 기준

1. 기존 react react-dom 제거

```bash
npm uninstall react react-dom
```

2. react, react-dom 17 설치

```bash
npm install react@17.0.2 react-dom@17.0.2
```

3. index.js 에 대한 설정

```js
// react 17.0.2

import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; //있으면
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

---

# 배포

Github Page 이용

```json
// package.json
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "deploy": "gh-pages -d build",
    "predeploy": "npm run build"
  },

  "homepage": "https://깃헙아이디.github.io/해당레포지토리이름"

```
