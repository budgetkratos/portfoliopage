
// NAVBAR SCROLL EFFECT

document.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})

var onresize = function () {
    var width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
    console.log(width);
}

// FORM 

// GET classes & IDs

const btn = document.getElementById('submit-btn');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

// CHECK inputs

btn.addEventListener('click', checkInputs, clearFields);


// define function to check inputs AFTER submitting

function checkInputs() {
    // get input VALUES
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    // USERNAME CHECK

    if (nameValue === '' || nameValue === null) {
        // add error class (analogous to ToDo project)

        setErrorFor(name, 'Username cannot be blank');
        event.preventDefault();
    } else {
        setSuccessFor(name)
    }

    // EMAIL CHECK

    if (emailValue === '') {
        // add error class (analogous to ToDo project)

        setErrorFor(email, 'E-mail cannot be blank');
        event.preventDefault();
    } else if (!emailIsValid(emailValue)) {
        setErrorFor(email, 'E-mail is not valid.');
        event.preventDefault();
    } else {
        setSuccessFor(email);
    }

    // MESSAGE CHECK

    if (messageValue === '' || messageValue === null) {
        // add error class (analogous to ToDo project)

        setErrorFor(message, 'Please enter a message.');
        event.preventDefault();
    }
    else {
        setSuccessFor(message);
    }
}


function setErrorFor(input, message) {
    const formControl = input.parentElement; // aiming for a DIV
    const small = formControl.querySelector('small'); // select small element.. 

    // insert error message inside small element

    small.innerText = message;

    // insert error class into form control

    formControl.classList.add('error');

    setTimeout(() => formControl.classList.remove('error'), 3000);
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.classList.add('success');
}


// E-mail format check 

function emailIsValid(email) {
    return /\S+@\S+\.\S+/.test(email);
}

// CLEAR FIELDS

function clearFields() {
    const nameValue = name.value == "";
    const emailValue = email.value == "";
    const messageValue = message.value == "";
}

// THEME CHANGER

const themeButton = document.querySelector('#theme-button');

themeButton.addEventListener('click', function () {
    const body = document.querySelector('BODY');
    const mainDoc = document.querySelector('.main');
    const workDoc = document.querySelector('.work');
    const aboutDoc = document.querySelector('.about');
    const contactDoc = document.querySelector('.contact');


    body.classList.toggle('dark');
    mainDoc.classList.toggle('dark');
    workDoc.classList.toggle('dark');
    aboutDoc.classList.toggle('dark');
    contactDoc.classList.toggle('dark');
})

