const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
const defaultNameOutput = 'Anonymous';

const handleInput = event => {
    nameOutput.textContent = event.currentTarget.value ? event.currentTarget.value : defaultNameOutput;
}

nameInput.addEventListener('input', handleInput);
