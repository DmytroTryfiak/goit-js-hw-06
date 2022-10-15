
const form = document.querySelector('form.login-form');
const formObject = {};

const handleFormSubmit = event => {
    event.preventDefault();
    const {
        elements: { email, password }
      } = event.currentTarget;
    if (!email.value || !password.value) {
        alert('Не всі поля заповнені');
        return;
    }
    formObject.email = email.value;
    formObject.password = password.value;
    console.log(formObject);
    event.currentTarget.reset();
}

form.addEventListener('submit', handleFormSubmit);