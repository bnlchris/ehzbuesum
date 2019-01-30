'use strict';

// Call these functions on page load
function pageLoad() {
	checkDsgvo();
	addData();
}

window.onload = pageLoad;

// Show DSGVO pop-up only on first visit
var dsgvo = document.querySelector('#dsgvo');
var button1 = document.querySelector('.okay');
var button2 = document.querySelector('.not-okay');

function checkDsgvo() {

	if (localStorage.getItem('secondVisit') !== 'true') {
		showDsgvo();
	} else {
		dsgvo.className = 'dsgvo.done';
		button1.tabIndex = -1;
		button2.tabIndex = -1;
		dsgvo.style.display = 'none';
	}
}

function showDsgvo() {
	//show only on first visit
	button1.setAttribute('aria-hidden', 'false');
	button2.setAttribute('aria-hidden', 'false');
	dsgvo.className = 'dsgvo';
	localStorage.setItem('secondVisit', 'true');
}

// Get rid of pop-up

button1.addEventListener('click', function () {
	dsgvo.className = 'dsgvo.done';
	localStorage.setItem('secondVisit', 'true');
	button1.setAttribute('aria-hidden', 'true');
	button2.setAttribute('aria-hidden', 'true');
	button1.tabIndex = -1;
	button2.tabIndex = -1;
	dsgvo.style.display = 'none';
});

button2.addEventListener('click', function () {
	dsgvo.className = 'dsgvo.done';
	location.href = 'datenschutz.html';
	localStorage.setItem('secondVisit', 'true');
	button1.setAttribute('aria-hidden', 'true');
	button2.setAttribute('aria-hidden', 'true');
	button1.tabIndex = -1;
	button2.tabIndex = -1;
	dsgvo.style.display = 'none';
});

// Fetch data
function addData() {

	// Data to impressum
	if (document.body.className === 'impressum') {

		glv.forEach(function (mitglied) {
			var newP = document.createElement('p');
			var newContent = document.createTextNode(mitglied);
			var newLine = document.createElement('br');
			newP.appendChild(newContent);
			newP.appendChild(newLine);
			document.getElementById("glv").appendChild(newP);
		});

		// Data to buchen
	} else if (document.body.className === 'buchen') {
		var buchenP = document.createElement('p');
		var buchenLine = document.createElement('br');
		var buchenContent = document.createTextNode("Telefon: " + kontakt.Telefon);
		buchenP.appendChild(buchenContent);
		buchenP.appendChild(buchenLine);
		document.getElementById('buchen').appendChild(buchenP);
		buchenContent = document.createTextNode("Mail: " + kontakt.Mail);
		buchenP.appendChild(buchenContent);
		document.getElementById('buchen').appendChild(buchenP);

		// Data to preise
	} else if (document.body.className === 'preise') {
		// create content for table

		// Nebensaison 1
		var preiseP = document.createElement('td');
		var preiseH = document.createTextNode("Nebensaison*");
		preiseP.appendChild(preiseH);
		document.querySelector('.nebensaison1').appendChild(preiseP);
		// data to table (first row)
		var preiseTd = document.createElement('td');
		var preiseContent = document.createTextNode(preise.Nebensaison_M);
		preiseTd.appendChild(preiseContent);
		document.querySelector('.nebensaison1').appendChild(preiseTd);
		// data to table (second row)
		preiseTd = document.createElement('td');
		preiseContent = document.createTextNode(preise.Nebensaison_R);
		preiseTd.appendChild(preiseContent);
		document.querySelector('.nebensaison1').appendChild(preiseTd);

		// Hauptsaison
		preiseP = document.createElement('td');
		preiseH = document.createTextNode("Hauptsaison*");
		preiseP.appendChild(preiseH);
		document.querySelector('.hauptsaison').appendChild(preiseP);
		// data to table (first row)
		preiseTd = document.createElement('td');
		preiseContent = document.createTextNode(preise.Hauptsaison_M);
		preiseTd.appendChild(preiseContent);
		document.querySelector('.hauptsaison').appendChild(preiseTd);
		// data to table (second row)
		preiseTd = document.createElement('td');
		preiseContent = document.createTextNode(preise.Hauptsaison_R);
		preiseTd.appendChild(preiseContent);
		document.querySelector('.hauptsaison').appendChild(preiseTd);

		// Nebensaison2
		preiseP = document.createElement('td');
		preiseH = document.createTextNode("Nebensaison*");
		preiseP.appendChild(preiseH);
		document.querySelector('.nebensaison2').appendChild(preiseP);
		// data to table (first row)
		preiseTd = document.createElement('td');
		preiseContent = document.createTextNode(preise.Nebensaison_M);
		preiseTd.appendChild(preiseContent);
		document.querySelector('.nebensaison2').appendChild(preiseTd);
		// data to table (second row)
		preiseTd = document.createElement('td');
		preiseContent = document.createTextNode(preise.Nebensaison_R);
		preiseTd.appendChild(preiseContent);
		document.querySelector('.nebensaison2').appendChild(preiseTd);

		// fetch data for seasons
		var saisonP = document.createElement('p');
		var saisonContent = document.createTextNode(saison.Nebensaison_Fruehling);
		saisonP.appendChild(saisonContent);
		document.querySelector('.saison1').appendChild(saisonP);

		saisonP = document.createElement('p');
		saisonContent = document.createTextNode(saison.Hauptsaison);
		saisonP.appendChild(saisonContent);
		document.querySelector('.saison2').appendChild(saisonP);

		saisonP = document.createElement('p');
		saisonContent = document.createTextNode(saison.Nebensaison_Herbst);
		saisonP.appendChild(saisonContent);
		document.querySelector('.saison3').appendChild(saisonP);

		// Data to anfahrt
	} else if (document.body.className === 'anfahrt') {
		var anfahrtP = document.createElement('p');
		var anfahrtLine = document.createElement('br');
		var anfahrtContent = document.createTextNode(kontakt.Straße);
		anfahrtP.appendChild(anfahrtContent);
		anfahrtP.appendChild(anfahrtLine);
		document.getElementById('adresse').appendChild(anfahrtP);
		anfahrtContent = document.createTextNode(kontakt.Ort);
		anfahrtP.appendChild(anfahrtContent);
		document.getElementById('adresse').appendChild(anfahrtP);

		// Print message to console	
	} else {
		console.log('No data fetch on this page');
	}
}

// Hamburger Menu
document.getElementById('open-menu').addEventListener('click', function () {
	// check if menu is open
	var menu = document.getElementById('menu');
	if (menu.className === "menu") {
		menu.classList.add("show");
	} else {
		menu.className = "menu";
	}
});

// close menu if user clickes on screen
document.getElementById('main').addEventListener('click', function () {
	var menu = document.getElementById('menu');
	if (menu.classList.contains('show')) {
		menu.className = "menu";
	}
});

// toggle font-size
var changeSize = document.querySelector('.change_font_size');
var bodyText = document.querySelector('.content-other');
changeSize.addEventListener('click', toggleSize);

function toggleSize() {
	// catch error on main page
	if (document.querySelector('.content-other')) {

		if (bodyText.className === 'content-other') {
			bodyText.classList.add('big');
		} else {
			bodyText.className = 'content-other';
		}
	} else {
		console.log("Auf dieser Seite kann die Schriftgröße nicht geändert werden");
	}
}

// Register the Service Worker after loading the first page
if ('serviceWorker' in navigator) {
	window.addEventListener('load', function () {
		navigator.serviceWorker.register('/ehzbuesum/sw.js').then(function (registration) {
			// Registration was successful
			console.log('ServiceWorker registration successful with scope: ', registration.scope);
		}, function (err) {
			// registration failed :(
			console.log('ServiceWorker registration failed: ', err);
		});
	});
}