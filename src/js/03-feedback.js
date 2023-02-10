import throttle from 'lodash.throttle';

const emailField = document.querySelector('input');
const messageField = document.querySelector('textarea');
const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onSubmit);
form.addEventListener('input', onInput);

const key = 'feedback-form-state';

const loadFormData = key => {
  try {
    const storageFormData = localStorage.getItem(key);
    return storageFormData === null
      ? { email: '', message: '' }
      : JSON.parse(storageFormData);
  } catch (error) {
    console.error(error.message);
  }
};

const formData = loadFormData(key);

let setToStorage = throttle(data => {
  localStorage.setItem(key, JSON.stringify(data));
}, 500);

emailField.value = formData.email;
messageField.value = formData.message;

function onInput(event) {
  if (event.target.tagName === 'INPUT') formData.email = event.target.value;
  if (event.target.tagName === 'TEXTAREA')
    formData.message = event.target.value;
  setToStorage(formData);
}

function onSubmit(event) {
  event.preventDefault();
  console.log(formData);
  form.reset();
  localStorage.clear();
  formData.email = '';
  formData.message = '';
}
