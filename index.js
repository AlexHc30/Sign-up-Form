const formInputs = Array.from(document.getElementsByClassName('formInput'));
formInputs.forEach(input => input.addEventListener('change', validateInputs));

let validInputs = false;
let validPassword = false;

const password = document.getElementById('password');
password.addEventListener('change', validatePassword);

const confPass = document.getElementById('confirm-p');
confPass.addEventListener('change', validatePassword);

const errMessage = document.getElementById('invalid');
const unfilled = document.getElementById('unfilled');
const form = document.getElementById('regForm');


const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', validateForm)


function validateInputs() {
    if(this.value !== '') {
        this.classList.remove('invalid');
    } else {
        this.classList.add('invalid');
    }

    validInputs = formInputs.every(input => input.value !== '');
    if(validInputs && validPassword) {
        submitBtn.disabled = false;
    }
    return submitBtn;
}


function validatePassword() {
    console.log('here')
    if(password.value === confPass.value && password.value !== '') {
        errMessage.style.display = 'none';
        password.classList.remove('invalid');
        confPass.classList.remove('invalid');
        validPassword = true;
    } else {
        password.classList.add('invalid');
        confPass.classList.add('invalid');
        errMessage.style.display = 'block';
        validPassword = false;
    }

    if(validInputs && validPassword) submitBtn.disabled = false;

    return [errMessage, validPassword, submitBtn];
}


function validateForm(event) {
    event.preventDefault();
    if(validPassword && validInputs) {
        submitBtn.classList.remove('invalid');
        form.requestSubmit()
    } else {
        submitBtn.disabled = true;
        formInputs.forEach(input => {
            if(input.value === '') {
                input.classList.add('invalid');
            }
        })
        validatePassword();
        unfilled.style.display = 'block';
        return unfilled;
    }
}

// create custom validation for all form controls



