// Call these functions on page load
function pageLoad () {
	checkDsgvo();
	addData();
}

window.onload = pageLoad;

// Show DSGVO pop-up only on first visit
const dsgvo = document.querySelector('#dsgvo');
const button1 = document.getElementsByClassName('okay');
const button2 = document.getElementsByClassName('not-okay');

function checkDsgvo() {

	if (localStorage.getItem('secondVisit') !== 'true') {
		showDsgvo();
	} else {
		dsgvo.className = 'dsgvo.done';
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

const buttonOkay = document.querySelector('.okay');
buttonOkay.addEventListener('click', () => {
	dsgvo.className = 'dsgvo.done';
	localStorage.setItem('secondVisit', 'true');
	button1.setAttribute('aria-hidden', 'true');
	button2.setAttribute('aria-hidden', 'true');
})

const buttonNo = document.querySelector('.not-okay');
buttonNo.addEventListener('click', () => {
	dsgvo.className = 'dsgvo.done';
	location.href = 'datenschutz.html';
	localStorage.setItem('secondVisit', 'true');
	button1.setAttribute('aria-hidden', 'true');
	button2.setAttribute('aria-hidden', 'true');
})

// Fetch data
function addData() { 
	
	// Data to impressum
	if (document.body.className === 'impressum') {

		glv.forEach(function(mitglied) {
		let newP = document.createElement('p');
		let newContent = document.createTextNode(mitglied);
		let newLine = document.createElement('br');
		newP.appendChild(newContent);
		newP.appendChild(newLine);
		document.getElementById("glv").appendChild(newP);
		})

	// Data to buchen
	} else if (document.body.className === 'buchen') {
		let buchenP = document.createElement('p');
		const buchenLine = document.createElement('br');
		let buchenContent = document.createTextNode("Telefon: " + kontakt.Telefon);
		buchenP.appendChild(buchenContent);
		buchenP.appendChild(buchenLine);
		document.getElementById('buchen').appendChild(buchenP);
		buchenContent = document.createTextNode("Mail: " + kontakt.Mail);
		buchenP.appendChild(buchenContent);
		document.getElementById('buchen').appendChild(buchenP);
	} else {
		console.log('No data fetch on this page')
		}
	
}

// Hamburger Menu
document.getElementById('open-menu').addEventListener('click', () => {
	// check if menu is open
	const menu = document.getElementById('menu');
	if (menu.className === "menu") {
		menu.classList.add("show");
	} else {
		menu.className = "menu";
	}
})

// close menu if user clickes on screen
document.getElementById('main').addEventListener('click', () => {
	const menu = document.getElementById('menu');
	if (menu.classList.contains('show')) {
		menu.className = "menu";
	} 
})

// toggle font-size
const changeSize = document.querySelector('.change_font_size');
const bodyText = document.querySelector('.content-other');
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
		console.log("Auf der Startseite kann die Schriftgröße nicht geändert werden");
	}
}