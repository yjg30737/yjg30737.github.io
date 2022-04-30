---
layout: post
title:  "CPU 잡아먹는 CompatTelRunner.exe이 하는 일과 비활성화하는 방법"
date:   2021-11-30 00:00:00 +0900
categories: posts
author: Jung Gyu Yoon
---
컴퓨터를 하다가 아무것도 안하고 있는데, 갑자기 CPU 돌아가는 소리가 크게 들립니다.

작업 관리자 열어보시면 그 이유가 다 나옵니다만, 윈도우를 os로 사용하시는 분들은 작업 관리자 목록을 CPU 자원 사용량 순으로 정렬할 때 CompatTelRunner.exe를 최상단에서 보신 경우가 꽤 있으실 겁니다.

<h1>1. CompatTelRunner.exe는 무엇인가?</h1>

윈도우 환경 향상을 위해 마소로 데이터를 자꾸자꾸 보내는 프로그램이라고 합니다.

보내는 양이 많다면 당연히 컴 자원을 많이 잡아먹겠죠? CPU가 팽팽 돌아갈 겁니다.

<h1>2. 비활성화 방법</h1>

저는 개인적으로 이런 걸 비활성화하는 것을 권장해드리지는 않습니다. 하지만 그렇게 하고 싶으신 분들을 위해 비활성화 방법을 알려드리자면요. 

<h4>1. 그룹정책 수정</h4>
윈도우 작업표시줄 검색창이나 윈도키+R(실행) 열어서 gpedit.msc를 실행합니다.

<b>컴퓨터 구성 -> 관리 템플릿 -> 윈도 구성요소 -> 데이터 수집 및 preview 빌드 -> 원격 분석 허용 클릭 -> 사용 안함</b> 설정하시면 되겠고요.

<h4>2. 레지스트리 수정</h4>
regedit.exe(레지스트리 편집기)를 gpedit.msc 실행했던 방식으로 실행합니다.
<b>컴퓨터\HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\DataCollection</b>에서 타입은 32비트 DWORD값이며 이름은 AllowTelemetry고 값은 0인 변수를 만듭니다.

<p><img src="{{site.url}}/assets/images/compat_regedit.png"/></p>
빈 공간 오른쪽 클릭해서 새로 만들기 하셔서 타입과 값 설정하면 위 사진처럼 나옵니다.

<h4>3. 서비스에서 Connected User Experiences and Telemetry 시작유형 사용안함 설정</h4>

<p><img src="{{site.url}}/assets/images/compat_service.png"/></p>
<h4>4. 재부팅</h4>

이렇게 하면 되는 걸로 알고 있습니다. 안되면.. ㅜ


