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