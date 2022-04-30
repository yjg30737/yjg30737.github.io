---
layout: post
title:  "파이썬(Python) eval 함수 설명, 사용방법"
date:   2021-11-27 00:00:00 +0900
categories: posts
author: Jung Gyu Yoon
---
파이썬 eval 함수는 문자열 형식으로 된 코드(예: print('123'))를 입력으로 받아 동적으로 계산하여 출력해주는 함수입니다.

사용예시
```python
eval("print('123')")
eval('1+2+3')
```

더 자세한 설명은 <a href="https://docs.python.org/3/library/functions.html#eval">python documentation</a>에서 보실 수 있습니다만, 대개는 위와 같이 문자열 형식으로 된 메소드나 수식을 계산하는 데 쓰입니다.

eval 함수가 유용한 것은 수식을 입력으로 받는 계산 메소드를 매우 쉽게 만들 수 있다는 점입니다.<br>
아래는 제가 제작한 <a href="https://github.com/yjg30737/pymeg.git">랜덤 사칙연산 생성기(pymeg)</a>입니다.

```python
from pymeg.expGenerator import ExpGenerator
from pymeg.expStruct import ExpStruct

problem = ExpStruct()
ext = ExpGenerator.get_problem(problem) # 문자열 형식의 랜덤 수식 생성하여 ext에 반환 
print('값: {0}, 타입: {1}'.format(ext, type(ext)))
result = eval(ext) # 문자열 형식의 수식을 동적으로 계산하여 숫자로 반환
print('값: {0}, 타입: {1}'.format(result, type(result)))
```

결과는 다음과 같습니다.
```
값: 5+8, 타입: <class 'str'> # 문자열(str) 형식의 랜덤 수식!
값: 13, 타입: <class 'int'> # 동적으로 계산된 이후 숫자로 반환되었기 때문에 int!
```

마찬가지로 응용프로그램인 계산기에도 응용할 수 있습니다. 대부분의 응용프로그램은 사용자에게 문자열로 입력을 받습니다. 

python을 이용한 eval은 문자열을 수식으로 취급하여, 계산 이후 결과를 반환하기에 매우 편리합니다.

아래 또한 제가 제작한 <a href="https://github.com/yjg30737/pyqt-dark-calculator.git">계산기(pyqt-dark-calculator)</a>입니다.

※ UI 제작 패키지인 PyQt5로 작성되었습니다. py 파일이므로 PyQt5를 설치하셔야 합니다. exe파일처럼 그냥 실행되는 거 아닙니다..ㅜ

예를 들어 사용자가 1+2+3을 입력합니다. 1+2+3은 문자열 형식으로 프로그램에게 주어집니다.

![example1](/assets/images/eval_example1.png)

그럼 eval('1+2+3')하여 6을 반환하죠.

![example](/assets/images/eval_example2.png)

eval은 math와 같은 외장 함수도 마찬가지로 지원합니다.

```python
import math # math와 같은 외장함수는 eval이든 아니든 꼭 import해줘야 합니다!

...

eval(str('math.sqrt(float({0}))'.format(last_n_regex)))) # math.sqrt(float(..)) 제곱근 계산하는 함수입니다.
```

이렇듯 문자열을 수식으로 변환하는 것에 관련해서는 eval을 줄기차게 사용하는 것이 여러모로 편리합니다.

<small>두 번째 포스팅입니다. 약간 설명충스러운 느낌이 들 수도 있습니다.. 죄송합니다..</small>






 


