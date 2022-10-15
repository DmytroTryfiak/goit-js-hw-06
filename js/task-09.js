function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChangeColor = document.querySelector('button.change-color');
const body = document.querySelector('body');
const colorField = document.querySelector('span.color');

const handleButtonChangeColor = () => {    
    colorField.textContent = getRandomHexColor();
    body.style.backgroundColor = colorField.textContent;    
}

buttonChangeColor.addEventListener('click', handleButtonChangeColor);
