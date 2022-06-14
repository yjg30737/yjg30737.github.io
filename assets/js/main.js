---
layout: none
---
$(document).ready(function() {
	// Reduce FOUC(flash of unstyled content) effect
	$("body").css('opacity', 1);

	// Set active navigation class based on URL
	var current = location.pathname;
    $('.navbar-nav .nav-item a').each(function(){
		// For set active attribute to home "/" properly 
		// (to not make other urls change which includes "/")
        var $this = $(this);
        if(current == '/' && $this.attr('href') == '/'){
			$this.addClass('active').sibilings().removeClass('active');
			return;
		}
		else{
			// if the current path includes in nav url list 
			// or sub link of one of those, make that nav url active
			if($this.attr('href').indexOf(current.split('/')[1]) !== -1){
				$this.addClass('active');
			}
		}
    });
});

window.onload = function() {
	// Init theme
	var toggler = document.querySelector('.theme-toggler'),
	currentTheme = localStorage.getItem('theme');
	// If user doesn't have any cookies, set prefers color scheme by default
	if (currentTheme == '' || currentTheme == null) {
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			currentTheme = 'dark';
			toggler.checked = 'true';
		} else {
			currentTheme = 'light';
			toggler.removeAttribute('checked');
		}
		// switch highlight theme
		switchHighlightThemeFunction();
	}
	// User do have cookie
	else {
		if (currentTheme == 'light') {
			toggler.removeAttribute('checked');
		}
		else {
			toggler.checked = 'true';
		}
		// switch highlight theme
		switchHighlightThemeFunction();
	}
	// Toggle theme by checkbox
	toggler.onclick = function(e) {
		darkmode.toggleDarkMode();
		if (this.checked) {
			localStorage.setItem('theme', 'dark');
		} else {
			localStorage.setItem('theme', 'light');
		}
		// switch highlight theme
		switchHighlightThemeFunction();
		// to switch disqus theme
		const event = new Event('themeChanged');
		document.dispatchEvent(event);
	}

	// function to switch highlight theme
	function switchHighlightThemeFunction(){
		currentTheme = localStorage.getItem('theme');
		if (currentTheme == 'light'){
			document.getElementById('highlight_light').removeAttribute("disabled");
			document.getElementById('highlight_dark').setAttribute("disabled", "disabled");
		} else {
			document.getElementById('highlight_dark').removeAttribute("disabled");
			document.getElementById('highlight_light').setAttribute("disabled", "disabled");
		}
	}

	// "Go to top" button init
	goTopButton = document.getElementById("go-to-top");
	
}

// "Go to top" button feature
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

// AnchorJs (add anchor links to all posts)
document.addEventListener('DOMContentLoaded', function(event) {
	anchors.add();
});