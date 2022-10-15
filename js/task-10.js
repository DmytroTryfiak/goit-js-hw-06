const baseSize = {
    height: 30,
    width: 30,
};

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');
const controlsInput = document.querySelector('#controls input');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getBoxSize(number) {
    return {
        height: `${10*number + baseSize.height}px`,
        width: `${10*number + baseSize.width}px`,
    }
}

function createBoxes (amount) {    
    const boxesAmount = document.querySelectorAll('#boxes div').length;
    const boxesArray = [];    
    for (let i = boxesAmount; i < amount; i++) {
        const newBox = document.createElement('div');
        const boxSize = getBoxSize(i);
        newBox.style.backgroundColor = getRandomHexColor();
        newBox.style.height = boxSize.height;
        newBox.style.width = boxSize.width;
        boxesArray.push(newBox);
    }
    return boxesArray;
}

function destroyBoxes () {
    boxes.innerHTML = '';
}

function handleCreateBtn () {
    boxes.append(...createBoxes(controlsInput.value));
}

function handleDestroyBtn () {
    destroyBoxes();
    controlsInput.value = '';
}

createBtn.addEventListener('click', handleCreateBtn);
destroyBtn.addEventListener('click', handleDestroyBtn);