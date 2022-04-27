/* Reduce FOUC(flash of unstyled content) effect */ 
$(document).ready(function() {
	$("body").css('opacity', 1);
});

window.onload = function() {
	
	/* Toggle theme */
	var toggler = document.querySelector('.theme-toggler'),
	currentTheme = localStorage.getItem('theme');
	if (currentTheme == 'light') toggler.removeAttribute('checked');
	else toggler.checked = 'true';

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
	
	/* Search feature */
	var sjs = SimpleJekyllSearch({
		searchInput: document.getElementById('search-input'),
		resultsContainer: document.getElementById('results-container'),
		json: 'http://localhost:4000/search.json',
		searchResultTemplate: '<li><a class="text-secondary" style="text-decoration: none;" href="http://localhost:4000{url}">{title}</a></li>',
		limit: 5
	});
}
