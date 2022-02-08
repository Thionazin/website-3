function changeTheme() {
	if(document.getElementById("style-link").getAttribute('href') === '../css/main.css') {
		document.getElementById("style-link").setAttribute('href', '../css/simple.css');
	} else if(document.getElementById("style-link").getAttribute('href') === '../css/simple.css') {
		document.getElementById("style-link").setAttribute('href', '../css/main.css');
	}
}
