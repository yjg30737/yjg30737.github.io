---
layout: post
title:  "jekyll에서 특수기호 raw string으로 인식시키는 방법"
date:   2021-11-30 00:00:00 +0900
categories: github
author: Jung Gyu Yoon
---
깃헙 페이지 포스트 내용 중 코드를 쓸 시, 중괄호나 밑줄 두개 같이 jekyll에서 특수기호로 취급되는 낱말은 제대로 입력이 되지 않습니다. 그럴 때는 다음과 같이 하시면 됩니다!
```
<% raw %>
(...)
<% endraw %>
```

(...) 안에 코드를 넣으시면 됩니다.





