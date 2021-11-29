---
layout: post
title:  "파이큐티(PyQt5)에서 윈도우 배경화면 설정하는 방법"
date:   2021-11-29 00:00:00 +0900
categories: pyqt5
---
파이큐티(PyQt5)에서 윈도우 배경화면 설정하기.. 참 어렵습니다. 윈도우 배경화면 설정하듯이 할 수 없는 것이 현실이죠. 

Qt Designer 같은 경우도 qrc 파일인지 뭔지도 만들어야 되고.. 심히 직관적이지 못한 것이 현실입니다. (적어도 제가 아는 부분까지는요)

이 글에서는 Qt Designer로 배경화면을 설정하는 것이 아닌, 직접 코드를 짜서 배경화면을 설정하는 방법을 설명합니다.

윈도우(여기서는 QMainWindow)에 특정 파일 이미지를 배경화면으로 설정하는 코드는 다음과 같습니다.

```python
{% raw %}
filename = 'abc.png' # abc.png는 파일명입니다!
self.setStyleSheet("QMainWindow {{ background-image: url('{0}'); }}".format(filename)) 
# 위 라인을 컴파일러는 
# self.setStyleSheet("QMainWindow { background-image: url('abc.png'); })
# 로 해석합니다."
{% endraw %}
```

※ '{% raw %}{{{% endraw %}'와 같이 중괄호를 2개 넣은 이유는, format 함수가 중괄호를 '{' 문자로 해석하도록 만들기 위해서입니다. (그거 파악하느라 약간 시간 소모했네요)

이걸 사용자 입력을 받아 배경화면 이미지 변경하고 싶은 pyqt5 소프트웨어에 붙여넣어서 filename을 사용자 입력 받는 변수로 설정해두면 될 것 같습니다.  




