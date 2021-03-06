'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Colors = function () {

	var hold = document.getElementsByTagName('html')[0];
	// const colorButton = document.querySelector('[data-button-colors]');
	var darkButton = document.querySelector('[data-button-dark]');
	var lightButton = document.querySelector('[data-button-light]');
	var cover = document.querySelector('[data-cover]');
	var buttons = document.querySelectorAll('[data-button]');
	var themes = [].concat(_toConsumableArray(document.querySelectorAll('[data-theme]')));
	var objButtons = {
		'light': lightButton,
		'dark': darkButton
	};

	function init() {
		bindEvents();
		checkLocal();
	}

	function checkLocal() {
		var hasLocal = localStorage.getItem('theme');
		if (!hasLocal) {
			objButtons.dark.click();
			return;
		}
		objButtons[localStorage.getItem('theme')].click();
	}

	// Only bind events to buttons
	function bindEvents() {

		// Light button
		lightButton.addEventListener('click', function (event) {
			controlStatusButtons(event);
			controlThemes('light');
			if (cover) {
				toggleCoverColor(true);
			}
			localStorage.setItem('theme', 'light');
		});

		// Dark button
		darkButton.addEventListener('click', function (event) {
			controlStatusButtons(event);
			controlThemes();
			if (cover) {
				toggleCoverColor();
			}
			localStorage.setItem('theme', 'dark');
		});
	}

	// Control status for themes buttons
	function controlStatusButtons() {
		buttons.forEach(function (item) {
			return item.classList.remove('is-active');
		});
		event.target.classList.add('is-active');
	}

	// Control themes wrap
	function controlThemes(isLight) {
		if (isLight) {
			hold.classList.add('is-light');
			themes[0].classList.add('is-active');
		} else {
			hold.classList.remove('is-light');
			themes[0].classList.remove('is-active');
		}
	}

	// Control status of cover
	function toggleCoverColor(condition) {
		if (condition) {
			cover.classList.add('has-color');
		} else {
			cover.classList.remove('has-color');
		}
	}

	return {
		init: init
	};
}();

Colors.init();