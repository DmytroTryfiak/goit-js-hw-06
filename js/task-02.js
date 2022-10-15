const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const container = document.querySelector('ul#ingredients');

const newElements = ingredients.map(item => {
    const newElement = document.createElement('li');
    newElement.classList.add('item');
    newElement.textContent = item;
    return newElement;
});

container.append(...newElements);