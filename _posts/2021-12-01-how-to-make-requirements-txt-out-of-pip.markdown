---
layout: post
title:  "pip로 requirements.txt를 앳, file... 없이 가지런하게 만드는 방법"
date:   2021-12-01 00:00:00 +0900
categories: posts
author: Jung Gyu Yoon
---

pip로 requirements.txt 앳(@), file... 없이 가지런하게 만드는 방법입니다.

```
pip freeze > requirements.txt
```
위는 매우 전형적인 방식입니다. 입력하면 아래와 같은 파일이 생깁니다.

![pip_freeze_1]({{site.url}}/assets/images/pip_freeze_1.png)

그런데 requirements.txt를 열어보시면 위와 같이 ~@~ 처럼 나오는 경우가 있습니다.
보통 "패키지이름==버전이름" 처럼 나와야 하는데 말이죠 ㅜ

보통 깃헙 저장소 소스에서 직접 다운받은 패키지를 저런 식으로 해석하더군요.

file... 같은 경우는 로컬이고 https... 같은 경우는 원격 저장소에서 받은 것입니다.

다시 다운로드할 때(특히 conda 쓰시는 분들)엔 상당히 애를 먹습니다! 

파이썬 IDE인 파이참 같은 경우 requirements.txt에 있는 패키지들을 자동으로 인스톨해주지만, ~@~ 형식의 패키지는 인스톨 시 실패합니다.

그렇다면 어떻게 양식을 통일해야 하는가?

```pip list --format=freeze > requirements.txt```

위와 같이 명령어를 작성하면 됩니다.

![pip_freeze_2]({{site.url}}/assets/images/pip_freeze_2.png)

이렇게 하면 위와 같이 가지런히 나오게 됩니다.

하지만 명심해야할 것. 릴리즈가 되지 않은 패키지(conda를 쓴다면 conda 저장소에 없거나, pip가 검색할 수 없는 패키지이거나)는 여전히 인스톨되지 않을 것입니다.


