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
		//BoolName = false;
		setErrorFor(username, 'Név nem lehet üres');
	} else if (!isName(usernameValue)) {
		//BoolName = false;
		setErrorFor(username, 'Nem valid név');
	} else {
		//BoolName = true;
		setSuccessFor(username);
		
	}
	
	if(emailValue === '') {
		//BoolEmail = false;
		setErrorFor(email, 'Email nem lehet üres');
	} else if (!isEmail(emailValue)) {
		//BoolEmail = false;
		setErrorFor(email, 'Nem valid email');
	} else {
		//BoolEmail = true;
		setSuccessFor(email);
	}
	
	if(dateValue === '') {
		//BoolDate = false;
		setErrorFor(date, 'Születési év nem lehet üres');
	} else if (!isDate(dateValue)) {
		//BoolDate = false;
		setErrorFor(date, 'Nem valid születési év');
	} else {
		//BoolDate = true;
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

/*let BoolName = false;
let BoolEmail = false;
let BoolDate = false;*/

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
	//if(BoolName && BoolEmail && BoolDate)
	document.querySelector('.container').style.display = "none";
	document.querySelector('.container2').style.display = "block";
};

let score = 0;

let q1 = document.querySelector('#q1_1');
let q2 = document.querySelector('#q2_1');
let q2_ = document.querySelector('#q2_3');
let q3 = document.querySelector('#q3');
let q4 = document.querySelector('#q4');
let q5 = document.querySelector('#q4');


function Quiz() {

	//Boolq1 = false;
	if(q1.checked)
	{
		score++;
		//Boolq1 = true;
	}

	//Boolq2 = false;
	if(q2.checked)
	{
		score++;
		//Boolq2 = true;
	}

	if(q2_.checked)
	{
		score++;
		//Boolq2 = true;
	}
	
	//Boolq3 = false;
	let q3_value = q3.value.toLowerCase();
	if(q3_value.includes("html"))
	{
		score++;
		//Boolq3 = true;
	}
	
	//Boolq4 = false;
	let q4_value = q4.value.toLowerCase();
	let q4_split = q4_value.split(" ");
	if(q4_split.includes("könnyű"))
	{
		score++;
		//Boolq4 = true;
	}

	if(q4_split.includes("végrehajt"))
	{
		score++;
		//Boolq4 = true;
	}

	if(q4_split.includes("weboldal"))
	{
		score++;
		//Boolq4 = true;
	}

	//Boolq5 = false;
	let q5_value = q5.value.toLowerCase();
	let q5_split = q5_value.split(" ");
	if(q5_split.includes("python"))
	{
		score++;
		//Boolq5 = true;
	}

	if(q5_split.includes("c#"))
	{
		score++;
		//Boolq5 = true;
	}

	console.log(score)
}

/*let Boolq1 = false;
let Boolq2 = false;
let Boolq3 = false;
let Boolq4 = false;
let Boolq5 = false;*/

function Quiz() {
	//if(Boolq1 && Boolq2 && Boolq3 && Boolq4 && Boolq5)
	document.querySelector('.container2').style.display = "none";
	document.querySelector('.container3').style.display = "block";
};

const button2 = document.getElementById("button2");
button2.addEventListener("click", displayScore);

function displayScore() {

	const scoreDisplay = document.getElementById("scoreDisplay");
  
	scoreDisplay.textContent = score;
  }