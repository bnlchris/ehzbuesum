// Show DSGVO pop-up only on first visit

const dsgvo = document.querySelector('#dsgvo');

window.onload = () => {

	if (localStorage.getItem('secondVisit') !== 'true') {
		showDsgvo();
	} else {
		dsgvo.className = 'dsgvo.done';
	}
}

function showDsgvo() {
	//show only on first visit
		dsgvo.className = 'dsgvo';
		localStorage.setItem('secondVisit', 'true');
}

// Get rid of pop-up

const buttonOkay = document.querySelector('.okay');
buttonOkay.addEventListener('click', () => {
	dsgvo.className = 'dsgvo.done';
	localStorage.setItem('secondVisit', 'true');
})

const buttonNo = document.querySelector('.not-okay');
buttonNo.addEventListener('click', () => {
	dsgvo.className = 'dsgvo.done';
	location.href = 'datenschutz.html';
	localStorage.setItem('secondVisit', 'true');
})



// Fetch data
function addData() { 
	
	// Data to impressum

	glv.forEach(function(mitglied) {
		let newP = document.createElement('p');
		let newContent = document.createTextNode(mitglied);
		let newLine = document.createElement('br');
		newP.appendChild(newContent);
		newP.appendChild(newLine);
		document.getElementById("glv").appendChild(newP);
	})
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