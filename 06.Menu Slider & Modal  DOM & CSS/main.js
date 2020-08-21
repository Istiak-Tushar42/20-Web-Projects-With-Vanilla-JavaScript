const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

// Toggle Nav
toggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav');
});

// Show Modal
open.addEventListener('click', () => {
    modal.classList.add('show-modal');
});

// Hide Modal
close.addEventListener('click', () => {
    modal.classList.remove('show-modal');
});

// Hide modal on outside click
window.addEventListener('click', e => {
    e.target == modal ? modal.classList.remove('show-modal') : false;
});

const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const submit = document.getElementById('submit');

submit.addEventListener('click', e => {
    const error = document.querySelector('.error');

    e.preventDefault();

    if(name.value.trim() == '' ) {
        error.innerText = 'Must fill this field';
    }
});