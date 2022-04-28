/* Reduce FOUC(flash of unstyled content) effect */ 
$(document).ready(function() {
	$("body").css('opacity', 1);
});

window.onload = function() {
	/* Init theme */
	var toggler = document.querySelector('.theme-toggler'),
	currentTheme = localStorage.getItem('theme');
	/* If user doesn't have any cookies, set prefers color scheme by default */
	if (currentTheme == '') {
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			currentTheme = 'dark';
			toggler.checked = 'true';
		} else {
			currentTheme = 'light';
			toggler.removeAttribute('checked');
		}
	}
	/* User do have cookie */
	else {
		if (currentTheme == 'light') toggler.removeAttribute('checked');
		else toggler.checked = 'true';
	}

	/* Toggle theme by checkbox */
	toggler.onclick = function(e) {
		darkmode.toggleDarkMode();
		if (this.checked) {
			localStorage.setItem('theme', 'dark');
		} else {
			localStorage.setItem('theme', 'light');
		}
		const event = new Event('themeChanged');
		document.dispatchEvent(event);
	}
	
	/* Change active */
	$('.navbar-nav a').on('click', function () {
		$(this).addClass('active').sibilings().removeClass('active');
	});
	
	/* Old search feature 
	var sjs = SimpleJekyllSearch({
		searchInput: document.getElementById('search-input'),
		resultsContainer: document.getElementById('results-container'),
		json: 'http://localhost:4000/search.json',
		searchResultTemplate: '<div id="search-searchbar"></div>
<div class="post-list m-3" id="search-hits">
    
    <div class="post-item">
        
        <span class="post-meta">Dec 1, 2021</span>

        <h2>
        <a class="post-link" href="/posts/pycharm/how-to-solve-the-nothing-to-show-problem-in-pycharm/">
            파이참(PyCharm) 프로젝트 파일 안보이는 문제, 설정 창 인터프리터 부분의 nothing to show 문제 해결하기
        </a>
        </h2>

        <div class="post-snippet"><p>파이참을 사용하다가 가끔씩 난관에 부딪칠 때가 많은데요.</p>
</div>
    </div>
    
    <div class="post-item">
        
        <span class="post-meta">Dec 1, 2021</span>

        <h2>
        <a class="post-link" href="/posts/pip/how-to-make-requirements-txt-out-of-pip/">
            pip로 requirements.txt를 앳, file... 없이 가지런하게 만드는 방법
        </a>
        </h2>

        <div class="post-snippet"><p>pip로 requirements.txt 앳(@), file… 없이 가지런하게 만드는 방법입니다.</p>
</div>
    </div>
    
    <div class="post-item">
        
        <span class="post-meta">Nov 30, 2021</span>

        <h2>
        <a class="post-link" href="/posts/windows/what-is-compattelrunners/">
            CPU 잡아먹는 CompatTelRunner.exe이 하는 일과 비활성화하는 방법
        </a>
        </h2>

        <div class="post-snippet"><p>컴퓨터를 하다가 아무것도 안하고 있는데, 갑자기 CPU 돌아가는 소리가 크게 들립니다.</p>
</div>
    </div>
    
    <div class="post-item">
        
        <span class="post-meta">Nov 30, 2021</span>

        <h2>
        <a class="post-link" href="/posts/github/how-to-input-raw-string-into-jekyll-post/">
            jekyll에서 특수기호 raw string으로 인식시키는 방법
        </a>
        </h2>

        <div class="post-snippet"><p>깃헙 페이지 포스트 내용 중 코드를 쓸 시, 중괄호나 밑줄 두개 같이 jekyll에서 특수기호로 취급되는 낱말은 제대로 입력이 되지 않습니다. 그럴 때는 다음과 같이 하시면 됩니다!</p>
<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>&lt;% raw %&gt;
(...)
&lt;% endraw %&gt;
</code></pre></div></div>
</div>
    </div>
    
    <div class="post-item">
        
        <span class="post-meta">Nov 30, 2021</span>

        <h2>
        <a class="post-link" href="/posts/python/how-to-fix-java-io-ioexception-in-pycharm/">
            파이참(PyCharm)에서 디렉토리 이름변경 시 java.io.ioexception 오류 해결방법
        </a>
        </h2>

        <div class="post-snippet"><p>파이참에서 디렉토리 이름변경 기능을 사용할 시 java.io.ioexception이 뜰 때가 있죠.</p>
</div>
    </div>
    
    <div class="post-item">
        
        <span class="post-meta">Nov 29, 2021</span>

        <h2>
        <a class="post-link" href="/posts/pyqt5/pyqt5-how-to-set-window-background/">
            파이큐티(PyQt5)에서 윈도우 배경화면 설정하는 방법
        </a>
        </h2>

        <div class="post-snippet"><p>파이큐티(PyQt5)에서 윈도우 배경화면 설정하기.. 참 어렵습니다. 윈도우 배경화면 설정하듯이 할 수 없는 것이 현실이죠.</p>
</div>
    </div>
    
    <div class="post-item">
        
        <span class="post-meta">Nov 29, 2021</span>

        <h2>
        <a class="post-link" href="/posts/python/pyqt5-how-to-set-relative-path-considering-main-module/">
            파이썬(Python)에서 메인 모듈 경로에 따른 상대경로 설정하는 방법
        </a>
        </h2>

        <div class="post-snippet"><p>이럴 때가 있죠. 메인 모듈에서 특정 경로에 있는 외부 모듈을 부를 때, 그 외부 모듈에서 필요한 css 파일 따위를 못 찾아서 <b>FileNotFoundError</b>를 내뱉는 경우 말입니다.</p>
</div>
    </div>
    
    <div class="post-item">
        
        <span class="post-meta">Nov 27, 2021</span>

        <h2>
        <a class="post-link" href="/posts/python/python-eval-usage/">
            파이썬(Python) eval 함수 설명, 사용방법
        </a>
        </h2>

        <div class="post-snippet"><p>파이썬 eval 함수는 문자열 형식으로 된 코드(예: print(‘123’))를 입력으로 받아 동적으로 계산하여 출력해주는 함수입니다.</p>
</div>
    </div>
    
    <div class="post-item">
        
        <span class="post-meta">Nov 27, 2021</span>

        <h2>
        <a class="post-link" href="/posts/python/python-comma-between-number/">
            파이썬(Python)에서 숫자 사이에 콤마(1,234,567...) 넣기
        </a>
        </h2>

        <div class="post-snippet"><p>숫자를 사용자에게 보여주는 프로그램에서는 수치를 확연하게 보여주기 위해 중간중간에 쉼표를 붙이죠.</p>
</div>
    </div>
    
    <div class="post-item">
        
        <span class="post-meta">Nov 27, 2021</span>

        <h2>
        <a class="post-link" href="/posts/github/basic-commands-of-github-bash/">
            깃배쉬에서 사용하는 기본적인 명령어(git init, git pull..) 설명
        </a>
        </h2>

        <div class="post-snippet"><p>깃배쉬 기본적인 명령어를 알려드리겠습니다. (사실상 첫 포스팅이네요.)<br /></p>
<div>
  <h1>1. 우선 짚고 넘어가야할 용어</h1>
    <p>
    <b>저장소(Repository)</b>: 줄여서 Repo라고 합니다. 프로젝트(프로그램 작업해놓은 것들)를 저장하는 곳입니다.
    </p>
    <p><img src="http://localhost:4000/images/repo.png" /></p>
    <p>위 사진에 있는 pyqt-font-dialog, pyqt-dark.. 등등이 저장소입니다</p>
    <p>
    <b>브랜치(Branch)</b>: 브랜치는 프로젝트 작업장 같은 겁니다. 하나의 저장소는 여러 브랜치를 가질 수 있습니다. 브랜치는 하나 이상 꼭 있어야 됩니다! 그래야 작업을 할 수 있으니까요.
    </p>
</div>
</div>
    </div>
    
</div>',
		limit: 5
	});
	*/
	/* "Go to top" button init */
	goTopButton = document.getElementById("go-to-top");
	
}
/* "Go to top" button feature */
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		goTopButton.style.display = "block";
	} else {
		goTopButton.style.display = "none";
	}
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}