import throttle from 'lodash.throttle';

const _ = require('lodash')
console.log(_)

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const localStorageKey = 'feedback-form-state';

const saveFormState = () => {
    const formState = {
    email: emailInput.value,
    message: messageInput.value,
    };
    localStorage.setItem(localStorageKey, JSON.stringify(formState));
};

const loadFormState = () => {
    const storedState = localStorage.getItem(localStorageKey);
    if (storedState) {
    const formState = JSON.parse(storedState);
    emailInput.value = formState.email;
    messageInput.value = formState.message;
    }
};

const handleSubmit = (event) => {
    event.preventDefault();
    const formState = {
    email: emailInput.value,
    message: messageInput.value,
    };
    console.log(formState);

    localStorage.removeItem(localStorageKey);
    emailInput.value = '';
    messageInput.value = '';
};

form.addEventListener('input', throttle(saveFormState, 500));
form.addEventListener('submit', handleSubmit);

loadFormState();
