---
layout: post
title:  "파이참(PyCharm) 프로젝트 파일 안보이는 문제, 설정 창 인터프리터 부분의 nothing to show 문제 해결하기"
date:   2021-12-01 00:00:00 +0900
categories: posts
author: Jung Gyu Yoon
---
파이참을 사용하다가 가끔씩 난관에 부딪칠 때가 많은데요.

있어야 할 프로젝트 파일 몇몇이 안보이는 일도 다 생깁니다. 

![pycharm_nothing_to_show_2]({{site.url}}/assets/images/pycharm_nothing_to_show_2.png)

위에서 내비게이션 뷰 모드를 Project에서 Project Files로 바꾸었을 때, Project Files에서 나오는 파일들이 Project에서도 나와야 되는데 안 나오죠!

그래서 프로젝트 구조 다시 설정해볼려고 설정 -> 인터프리터 들어가보면 nothing to show라고만 나옵니다.

![pycharm_nothing_to_show]({{site.url}}/assets/images/pycharm_nothing_to_show.png)

위 사진처럼, Project: ... 와 같이 나와야 되는데 말이죠.

프로젝트는 분명히 존재하는데, 프로젝트 내에 있는 파일이 제대로 인식이 안되는 경우가 있다?

구글링해보니 <b>해답은 .idea 폴더를 삭제한 뒤 파이참을 다시 실행시키는 것이 답이라더군요.</b>

그렇게 해보니까 다시 됩니다 ㅎㅎ 물론 사라졌던 .idea 폴더도 다시 생기고요.

※ .idea 폴더는 프로젝트 이름, 디렉토리 이름 등 정보를 포함한 xml 파일들이 있는 폴더입니다.