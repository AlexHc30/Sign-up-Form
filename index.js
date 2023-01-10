const password = document.getElementById('password');
const confPass = document.getElementById('confirm-p');
password.addEventListener('change', validate);
confPass.addEventListener('change', validate);
const errMessage = document.getElementById('invalid');
const form = document.getElementById('regForm');
let valid = false;

function validate() {
    if(password.value === confPass.value) {
        errMessage.textContent = '';
        valid = true;
    }
    return [errMessage, valid];
}

const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if(valid) form.requestSubmit();
})





