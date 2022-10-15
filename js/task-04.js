let counter = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counterField = document.querySelector('span');

const updatecounterField = counter => {
    counterField.textContent = counter;
}

const handleDecrement = () => {
    counter--;
    updatecounterField(counter);
}

const handleIncrement = () => {
    counter++;
    updatecounterField(counter);
}

decrementBtn.addEventListener('click', handleDecrement);
incrementBtn.addEventListener('click', handleIncrement);



