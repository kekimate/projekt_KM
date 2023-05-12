const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const date = document.getElementById('date');
const password = document.getElementById('password');
const button = document.getElementById('button')

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {

	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const dateValue = date.value.trim();
	const passwordValue = password.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Név nem lehet üres');
	} else if (!isName(usernameValue)) {
		setErrorFor(username, 'Nem valid név');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email nem lehet üres');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Nem valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(dateValue === '') {
		setErrorFor(date, 'Születési év nem lehet üres');
	} else if (!isDate(dateValue)) {
		setErrorFor(date, 'Nem valid születési év');
	} else {
		setSuccessFor(date);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Jelszó nem lehet üres');
	} else if(passwordValue !== 'jelszo') {
		setErrorFor(password, 'Hibás jelszó');
	} else{
		setSuccessFor(password);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isName(username) {
    return /(^[A-Z]{1}[a-zéáőúóüöűáí]+\s[A-Z]{1}[a-zéáőúóüöűáí]+\s[A-Z]{1}[a-zéáőúóüöűáí]+|^[A-Z]{1}[a-zéáőúóüöűáí]+\s[A-Z]{1}[a-zéáőúóüöűáí]+)/.test(username)
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isDate(date) {
    return /^([0-9]{4}[-/.]?((0[13-9]|1[012])[-/.]?(0[1-9]|[12][0-9]|30)|(0[13578]|1[02])[-/.]?31|02[-/.]?(0[1-9]|1[0-9]|2[0-8]))|([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00)[-/.]?02[-/.]?29)$/.test(date)
}

function Megjelenit() {
	document.querySelector('.container').style.display = "none";
	document.querySelector('.container2').style.display = "block";
};
