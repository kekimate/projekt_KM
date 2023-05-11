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

/*
function CheckAnswers()
{

    // Radio button ellenőrzés

    let isRadioValid = false;

    let radio = document.querySelector('input[name="drone"]:checked');

    let RadioValue = radio.value;

    const RadioAnswer = "python"


    if(RadioValue === RadioAnswer)
    {
        console.log("Python")
        isRadioValid = true;
    }
    else
    {
        isRadioValid = false;
    }

    console.log("RADIO",isRadioValid)

    //Checkbox ellenőrzés

    let isCheckBoxValid = false;


    let GoodCheckBoxes = document.querySelectorAll('input[name="check"]');
    let BadCheckBoxes = document.querySelectorAll('input[name="rossz"]');
    let selectedValues = [];

    if (GoodCheckBoxes[0].checked && GoodCheckBoxes[1].checked) {
        isCheckBoxValid = true;
    }
    else
    {
        isCheckBoxValid = false;
    }

    for (let i = 0; i < BadCheckBoxes.length; i++) {
        if (BadCheckBoxes[i].checked) {
            isCheckBoxValid = false;
            break;
        }
    }

    console.log("CHECKBOX",isCheckBoxValid)

    //Text ellenőrzés

    let isTextValid = false;

    const Text = document.getElementById("TextValasz").value.trim();

    let TextAnswer = "1996";

    //TextAnswer = TextAnswer.replace(/\s+/g, ' ').trim();

    if(Text === TextAnswer)
    {
        isTextValid = true;
    }
    else {
        isTextValid = false;
    }

    console.log("TEXT",isTextValid)



    //Textarea ellenőrzés

    let isTextAreaValid = false;

    let megadottValasz = document.getElementById('textarea').value;
    let elfogadottValasz = "objektum orientált programozás";

    megadottValasz = megadottValasz.replace(/\s+/g, ' ').trim().toLowerCase();

    if (megadottValasz === elfogadottValasz) {
        document.getElementById('textarea').style.border = "2px solid green";
        isTextAreaValid = true;
    } else {
        document.getElementById('textarea').style.border = "2px solid red";
        isTextAreaValid = false;
    }

    console.log("TEXTAREA", isTextAreaValid)

    Select();

}

function Select()
{
    let isFirstSelectValid = false;


    const ValasztottElem = document.getElementById("kiegeszito1");
    let ValasztottErtek = ValasztottElem.value;
    const eredmenyElem = document.getElementsByClassName('eredmeny')[0];

    if (ValasztottErtek !== "") {
        eredmenyElem.textContent = "Válasz: " + ValasztottErtek;
        isFirstSelectValid = true;
    } else {
        eredmenyElem.textContent = "Nincs kiválasztva.";
        isFirstSelectValid = false;
    }

    console.log("ELSŐ",isFirstSelectValid)

    //Második választás

    let isSecondSelectValid = false;

    const ValasztottElem2 = document.getElementById("kiegeszito2");
    let ValasztottErtek2 = ValasztottElem2.value;
    const eredmenyElem2 = document.getElementsByClassName('eredmeny')[1];

    if (ValasztottErtek2 !== "") {
        eredmenyElem2.textContent = "Válasz: " + ValasztottErtek2;
        isSecondSelectValid = true;

    } else {
        eredmenyElem2.textContent = "Nincs kiválasztva.";
        isSecondSelectValid = false;
    }

    console.log("MÁSODIK",isSecondSelectValid)


}

window.onload
{
    console.log("betöltve.");
    Kerdojel.style.visibility = "hidden";
}*/
