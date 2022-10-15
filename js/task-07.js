const input = document.querySelector('input#font-size-control');
const text = document.querySelector('span#text');

const handleInput = event => {
    text.style.fontSize = `${event.currentTarget.value}px`;
}

input.addEventListener('input', handleInput);