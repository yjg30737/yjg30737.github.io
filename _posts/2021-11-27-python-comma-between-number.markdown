---
layout: post
title:  "파이썬(Python)에서 숫자 사이에 콤마(1,234,567...) 넣기"
date:   2021-11-27 00:00:00 +0900
categories: posts
author: Jung Gyu Yoon
---
숫자를 사용자에게 보여주는 프로그램에서는 수치를 확연하게 보여주기 위해 중간중간에 쉼표를 붙이죠.

또한 소수점 아래에는 쉼표를 붙이지 않습니다. 그렇기에 소수점이 있을 때와 없을 때를 구분하여 코드를 짜야 하겠죠.

코드 예시
```python
    text = '1234567890.9876543210' # 여기서 초기값은 문자열입니다!
    if text.find('.') == -1: # 소수점 없을 때
        text = '{:,}'.format(int(text))
    else:
        pre_dot, post_dot = text.split('.') # 소수점 있을 때. 소수점 기준으로 앞과 뒤를 나눕니다. 
        text = '{:,}'.format(int(pre_dot)) + '.' + post_dot 

    print(text) 
```

결과값
```
1,234,567,890.9876543210
```

파이썬 3.6버전 이상 기준으로 더 짧은 코드로도 가능하다더군요.

짧은 코드 예시
```python
num = 1234567890.9876543210 # 여기서 초기값은 문자열이 아니라 정수(int)입니다.
num = f"{num:,}"
print(num)
```

결과값
```
1,234,567,890.9876542
```

소수점 아래 부분이 서로 결과가 다르네요. 정확하게 계산하는 것을 원한다면 첫 번째 방법으로, 소수점 신경 안쓰고 쉽게 계산하겠다! 싶으시면 두 번째 방법으로 하시면 될 것 같습니다.

파이썬을 이용한 응용 프로그램 개발에서도 물론 활용 가능합니다. 얼마 전 제작했던 숫자 입력용 QLineEdit(PyQt5 위젯)인 <a href="https://github.com/yjg30737/number-lineedit.git">number-lineedit</a>에서 붙리언 값을 입력으로 받는 setComma라는 메서드로 쉼표를 토글할 수 있게 했습니다.






 


