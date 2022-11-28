---
layout: post
title:  "Electron exe 파일 초간단 설치법"
date:   2022-11-28 00:00:00 +0900
categories: posts
author: Jung Gyu Yoon
---
거두절미하고 설명합니다.

빌드를 원하는 폴더 터미널 내에서 다음 명령어들을 실행합니다.

1. npm init --yes
아주 간단한 package.json 파일 하나를 만듭니다.

2. npm install -g electron-builder
electron-builder를 글로벌 형태로 설치합니다. 글로벌 형태로 작성할 시 어디서든 사용할 수 있습니다.

3. 
```json
"scripts": {
    "start": "electron .",
    "build:osx": "electron-builder --mac",
    "build:linux": "npm run build:linux32 && npm run build:linux64",
    "build:linux32": "electron-builder --linux --ia32",
    "build:linux64": "electron-builder --linux --x64",
    "build:win": "npm run build:win32 && npm run build:win64",
    "build:win32": "electron-builder --win portable --ia32",
    "build:win64": "electron-builder --win portable --x64"
},
```

package.json에 위 내용을 붙여넣습니다. 기존에 있던 scripts는 제거하시면 됩니다.
위에 나열된 스크립트 명령어들은 각 운영체제에 맞게 일렉트론 파일을 빌드하도록 해줍니다.

4. npm i electron --save-dev
일렉트론을 개발자 의존성으로 설치합니다. 이렇게 하지 않으면 일렉트론 깔라고 나옵니다.

5. main.js나 index.js를 생성합니다. 이 스크립트가 메인 스크립트가 됩니다. package.json에 "main" 속성의 값을 main.js나 index.js로 변경합니다.

6. 메인 스크립트는 비어 있습니다. 따라서 다음과 같이 추가해볼까요? 그냥 복붙하시면 됩니다 :)

```javascript
const { app, BrowserWindow, shell } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800, // 가로
    height: 600, // 세로
    autoHideMenuBar: true, // 메뉴바 일단 숨김!!
  })

// 링크 클릭할시 프로그램 안에서 열리는데
// 브라우저에서 열려야겠죠.. 기본이라고 생각되어서 여기 놓습니다 !!
  win.webContents.on('new-window', function (e, url) {
    e.preventDefault();
    shell.openExternal(url);
  });

// 님이 적는 url이 exe 파일이 됩니다~~ 아래는 제블로그 URL 입니다.
  win.loadURL('https://yjg30737.github.io/') 
  

}

app.whenReady().then(() => {
  createWindow()
})
```

안채워주시면 빌드할때 오류납니다😅

7. 빌드 전 테스트는 필수입니다, 따라서

```
npm start
```
를 입력해줍니다 :)

8. 이제 빌드해줍니다. 윈도 64비트라고 가정합니다.

```
npm run build:win64
```

쫌 오래 걸릴겁니다. 아닐수도 있고요..?

9. dist 폴더 안에 win-unpacked 폴더 들어가시면 exe 파일 하나가 보일겁니다.

![example](/assets/images/2022-11-28/a.png)

윈도 "기본" 타이틀명은 package.json의 name 값 그대로입니다.

수고수고 👌