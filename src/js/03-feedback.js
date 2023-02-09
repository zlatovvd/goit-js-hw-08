import throttle from 'lodash.throttle';

const emailField = document.querySelector('input');
const messageField = document.querySelector('textarea');
const form = document.querySelector('.feedback-form');

emailField.addEventListener('input', onInputEmail);
messageField.addEventListener('input', onInputMessage);
form.addEventListener('submit', onSubmit);

const key = 'feedback-form-state';

const loadFormData = key => {
  try {
    const storageFormData = localStorage.getItem(key);
    return storageFormData === null
      ? { email: null, message: null }
      : JSON.parse(storageFormData);
  } catch (error) {
    console.error(error.message);
  }
};

const formData = loadFormData(key);

let setToStorage = throttle(data => {
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}, 500);

emailField.value = formData.email;
messageField.value = formData.message;

function onInputEmail(event) {
  formData.email = event.currentTarget.value;
  setToStorage(formData);
}

function onInputMessage(event) {
  formData.message = event.currentTarget.value;
  setToStorage(formData);
}

function onSubmit(event) {
  event.preventDefault();
  form.reset();
  localStorage.clear();
  console.log(formData);
}
