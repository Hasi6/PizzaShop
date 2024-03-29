//Form Blur Event Listners

document.getElementById('name').addEventListener('keyup', validateName);
document.getElementById('se-number').addEventListener('keyup', validateSeNumber);
document.getElementById('email').addEventListener('keyup', validateEmail);
document.getElementById('phone').addEventListener('keyup', validatePhone);

document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('se-number').addEventListener('blur', validateSeNumber);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);



function validateName() {
    const name = document.getElementById('name');
    const re = /^[a-zA-Z]{2,10}$/;

    if (!re.test(name.value)) {
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }
}

function validateSeNumber() {
    const seNumber = document.getElementById('se-number');
    const re = /^SE\/201[2-7]\/0[0-5][0-5]$/;

    if (!re.test(seNumber.value)) {
        seNumber.classList.add('is-invalid');
    } else {
        seNumber.classList.remove('is-invalid');
    }
}

function validateEmail() {
    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if (!re.test(email.value)) {
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }
}

function validatePhone() {
    const phone = document.getElementById('phone');
    const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

    if (!re.test(phone.value)) {
        phone.classList.add('is-invalid');
    } else {
        phone.classList.remove('is-invalid');
    }
}