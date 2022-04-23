---
layout: post
title:  "파이썬(Python)에서 메인 모듈 경로에 따른 상대경로 설정하는 방법"
date:   2021-11-29 00:00:00 +0900
categories: posts/python
author: Jung Gyu Yoon
---
이럴 때가 있죠. 메인 모듈에서 특정 경로에 있는 외부 모듈을 부를 때, 그 외부 모듈에서 필요한 css 파일 따위를 못 찾아서 <b>FileNotFoundError</b>를 내뱉는 경우 말입니다.

이렇게 되는 이유는 메인 모듈을 중심으로 그 파일의 위치를 탐색하기 때문입니다.
외부 모듈을 중심으로 탐색하는 것이 아니라요.

이럴 때는 우리가 실행하는 메인 모듈의 경로와 외부 모듈의 파일 경로를 상대 경로로 연결시킬 필요가 있겠죠.

그래야만 메인 모듈에서 외부 모듈의 css 파일 등을 로드할 수 있으니까요.
우선 짚고 넘어가야 할 변수와 함수를 설명드리겠습니다.

<h4>1. __file__ 변수</h4>
이 변수는 말이죠. 이 변수가 포함된 모듈 파일(.py)의 경로를 담고 있는 변수입니다.
<h4>2. os.getcwd()</h4>
외장 모듈인 os의 함수인 getcwd입니다. getcwd는 메인 모듈이 포함되어 있는 디렉토리를 리턴합니다.
<h4>3. os.path.relpath(a, b)</h4>
os.path.relpath(a, b)는 b에 대한 a의 상대 경로를 리턴합니다.

```python
C:\Users\tende\anaconda3\envs\projectToTestTheRemoteGitHubPackageMadeByMe\lib\site-packages\pyqt_dark_calculator\main.py
# a
C:\Users\tende\PycharmProjects\projectToTestTheRemoteGitHubPackageMadeByMe 
# b
..\..\anaconda3\envs\projectToTestTheRemoteGitHubPackageMadeByMe\lib\site-packages\pyqt_dark_calculator\main.py
# os.path.relpath(a, b)
```

이 방법을 다음과 같이 활용할 수 있습니다.

```python
css_file_path = os.path.join(os.path.dirname(os.path.relpath(__file__, os.getcwd())), r'style\button.css')
```

위 코드는 제가 제작했던 <a href="https://github.com/yjg30737/pyqt-dark-calculator.git">계산기</a> 코드의 일부입니다. 이것을 깃으로 인스톨한 뒤 임포트하여 사용할 사람들을 위해 위와 같은 코드를 작성하였습니다. 

외부 모듈에서 필요로 하는 style\button.css를 메인 모듈에서 찾아서 로드할 수 있게 하려고 css_file_path(button.css 파일 경로)를 메인 모듈 기준으로 한 상대 경로로 만들었습니다.

아 참, 위 코드에서 사용되었던 <b>os.path.dirname(filename)</b>은 파일을 인자로 그 파일의 폴더를 리턴해주는 함수입니다. 또 <b>os.path.join(a, b)</b> 함수는 a와 b 경로를 서로 연결시켜줍니다. a는 디렉토리여야 하고, b는 a의 하위에 위치한 파일이어야 합니다!

특정 리소스 파일이 필요한 외부 모듈을 작성할 때 필요한 코드 같습니다. 다른 방법이 있는지 아직 모르겠지만, 일단 저는 저 방식으로 하니까 되더군요.

딱히 뭐라고 포스팅을 끝내야할지 모르겠네요! 그럼!


