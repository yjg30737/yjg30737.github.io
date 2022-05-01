---
layout: post
title:  "깃배쉬에서 사용하는 기본적인 명령어(git init, git pull..) 설명"
date:   2021-11-27 00:00:00 +0900
categories: posts
author: Jung Gyu Yoon
---

깃배쉬 기본적인 명령어를 알려드리겠습니다. (사실상 첫 포스팅이네요.)<br>
<div>
  <h2>1. 우선 짚고 넘어가야할 용어</h2>
    <p>
    <b>저장소(Repository)</b>: 줄여서 Repo라고 합니다. 프로젝트(프로그램 작업해놓은 것들)를 저장하는 곳입니다.
    </p>
    <p><img src="{{site.url}}/assets/images/repo.png"/></p>
    <p>위 사진에 있는 pyqt-font-dialog, pyqt-dark.. 등등이 저장소입니다</p>
    <p>
    <b>브랜치(Branch)</b>: 브랜치는 프로젝트 작업장 같은 겁니다. 하나의 저장소는 여러 브랜치를 가질 수 있습니다. 브랜치는 하나 이상 꼭 있어야 됩니다! 그래야 작업을 할 수 있으니까요.
    </p>
</div>

<div>
  <h2>2. 명령어 쓰는 곳</h2>
  <b>GitHub Bash</b>입니다.<br> 리눅스의 셸 중에 배쉬가 있고, 윈도우의 cmd(명령 프롬프트)도 셸의 일종이죠. 깃헙도 그 셸이 있는데 그게 바로 GitHub Bash입니다. 구글에서 검색하시면 곧바로 다운가능합니다.<br><br>
</div>

<div>
  <h2>3. 기본적인 명령어</h2>
  <p>우선 원하는 폴더에 가셔서 깃 배쉬를 켭니다. 오른쪽 클릭하면 컨텍스트 메뉴에 Git Bash Here이 있을텐데 그거 누르면 깃 배쉬가 나올 것입니다. 아니면 cd 명령어(현재 참조하는 폴더 바꾸는 명령어. cd C:/.. 처럼 사용함)로 가셔도 되고요.</p>
  <p><b>git config --global user.name "이름"</b> // 님 이름 영어로 적으시면 됩니다.</p>
  <p><b>git config --global user.email "깃허브 이메일"</b> // 님이 깃허브에 가입했을 때 입력한 이메일을 여기서 입력하세요.</p>
  <p><small>※ 위 두 명령어는 깃헙배쉬 다운받고 나서 처음 사용할때만 쓰고 그 뒤엔 할 필요 없습니다. 대신에 처음엔 꼭 하셔야 합니다. 안그러면 님 이메일 뭔지 계속 물어봅니다.</small></p>

  <p><b>git init</b> // 깃 명령어 사용가능한 폴더로 만듭니다. 이 명령 입력하고 나면 .git이라는 숨겨진 폴더가 생깁니다. (숨김 파일/폴더 볼 수 있게 탐색기 설정하면 보입니다.)<br>
  .git 폴더는 깃 저장소를 나타내는 표식이라고 보면 됩니다.</p>
  <p><small>※ git init 명령만 입력하면 master 브랜치가 디폴트로 생깁니다. git init abs123을 입력하면 abc123이라는 폴더가 생기고 그 안에 저장소가 생깁니다.</small></p>

  <p><b>git pull</b> // 원격 저장소의 파일들을 내 저장소에 가지고 옵니다.<br> 원격저장소가 있다면 꼭 하셔야 됩니다.<br>
  님이 혼자 쓰시는 거라고 하더라도, 작업할때는 git pull 먼저 부르는게 좋은 습관입니다.</p>

  <p>그런데 처음부터 다짜고짜 git pull 입력하면 "There is no tracking information for the current branch... 이런 메시지를 뱉어내면서 파일 안 가져와줄거라고 말합니다. 그래서 먼저 어느 원격저장소에서 갖고와야 되는지를 정한 뒤에 이놈한테 좀 갖고 와달라고 말해야겠죠.<br>다음 두 명령어를 입력하면 됩니다.
  
  <p><b>git remote add origin https://github.com/username/reponame.git</b> // 뒤에 https...는 외부저장소 url입니다. 외부저장소와 로컬 저장소를 연결합니다. origin은 외부 저장소를 일컫는 말입니다.<br>
  (외부 저장소의 실제 이름이 아니라, git에서 관용적으로 사용하는 말입니다.)<br>
  <b>git pull origin master</b> // origin(외부저장소)에서 master(로컬 저장소의 브랜치)로 파일을 갖고 옵니다. 이 명령어를 입력하면, 실제로 그곳에 있는 파일들이 로컬 저장소 폴더에 추가됩니다.</p>

  <p>이후에 pull할 땐 git remote~는 입력할 필요가 없습니다. 하지만 git pull origin master는 계속해서 입력해야되는데요. <br><b>git branch --set-upstream-to=origin/master master</b>를 입력하면 git pull만 입력해도 됩니다.<br>--set-upstream-to=origin..는 origin을 파일을 받아오는 upstream(상류)로 간주하겠다는 것입니다.</p>

  <p><b>touch abc.txt</b> // abc.txt라는 파일을 추가합니다. 리눅스 하시는 분들은 touch 명령어가 익숙하실겁니다. (근데 이런 명령어 아니라도 그냥 다른데서 파일 갖고와도 됩니다.)</p>

  <p><b>git status</b> // 지금 저장소 상태를 보는 겁니다. 정확히는 브랜치를 보는거죠.
  출력은 대략 다음과 같이 나옵니다. 해석해드리자면요.

  {% highlight git %}
  On branch main // 지금 사용자가 사용하는 브랜치 이름: main
  Your branch is up to date with 'origin/main'. // 
  님 브랜치가 원격저장소(origin/main)랑 같은 최신버전이라는 뜻입니다. 
  즉 파일 목록이 같다는 거죠.
  여기서 origin은 원격저장소를 일컫는 이름이고 main은 그 브랜치 이름입니다.

  Untracked files:
    (use "git add <file>..." to include in what will be committed)
          "_posts/2021..(생략)

  nothing added to commit but untracked files present (use "git add" to track)

  // Untracked files...는 아직 로컬 저장소가 인식을 못하는 파일이 있다는 겁니다. 
  파일을 추가해줘도 저장소가 인식을 자동으로 안해주거든요. 
  USB나 이어폰 노트북에 꽃을때 일일이 연결하겠냐고 물어보는 거랑 비슷한 거죠. 
  우리가 "git add" 명령어로 인식시켜줘야 합니다. 
  (use "git add" to track 메시지 보이시죠)
  {% endhighlight %}

  <p><b>git add .</b> // 로컬 저장소한테 제가 추가한 파일들 인식하라는 명령어입니다. add 다음의 .는 루트폴더(저장소 최상위폴더)를 말합니다.<br>
  루트폴더부터 추가된 모든 파일들 인식하라는 거니 전부 다 인식하라는 것이죠.</p>

  <p><b>git commit -m "First commit"</b> // 커밋하기(내 저장소에 변경여부 저장) -m "abc"는 커밋메시지를 "First commit"으로 하겠다는 겁니다. 커밋메시지는 위키의 수정코멘트랑 같은 건데 "내가 파일을 어떠어떠하게 변경했다"라고 사람들에게 알려주는 겁니다.</p>

  <p><img src="{{site.url}}/assets/images/commit_message.png"></p>
  
  <p>위는 깃헙 사이트에서 볼 수 있는 저장소 파일 목록입니다. yjg30737(제 아이디) 옆에 있는 <cite>Replace example.png</cite>는 가장 최근 커밋메시지고 파일 목록이랑 2 days ago(2일전에 커밋) 사이에 있는 것들도 마찬가지로 커밋메시지입니다.</p>

  <p><b>git push</b> // 원격 저장소에도 저장(반영)</p>
  <p>이것도 바로는 안될텐데 아까 pull 때처럼 <b>git push origin master</b> 하시면 됩니다. --set-upstream하셨으면 이것도 git push만 해도 됩니다.</p>

  <p><b>rm -rf .git</b> // 로컬 깃 저장소 삭제 명령어입니다. 물론 탐색기에서 직접 지우셔도 됩니다. 혹시나 깃헙 배쉬 연습하시다가 이상하게 되어버려서 다시 해야겠다고 생각하신다면? 삭제하시면 됩니다.</p>


<div>
  <h2>5. 첫번째 포스트..</h2>
  <p>힘드네요. 일단 그거 얘기하고 싶었고 또..<br>
  제가 이미지도 곁들이는 등 많은 노력을 기울였지만 두서있게 설명을 잘 못한 것도 있고, html 등 웹사이트 코딩에 약한편이라 제대로 설명을 못한게 한이 맺힙니다.. 아니 뭐 그정도는 아닐지도..<br>
  그래도 저도 배운게 어느 정도 있는 것 같고, 누군가한테 설명을 하는 능력(설명력)이 향상되었다는 느낌이 샘솟네요.<br> 
  여러분들이 읽을 필요 없는 글이지만, 그냥 제가 적고 싶어서 적어봤습니다ㅎ</p>