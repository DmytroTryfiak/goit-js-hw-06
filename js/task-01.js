const selectors = {
    category: 'ul#categories li.item',
    categoryHeader: 'h2',
    categoryItem: 'li',
};

const categories = document.querySelectorAll(selectors.category);

console.log(`Number of categories: ${categories.length}`);

categories.forEach( category => {
    console.log('\n');
    const categoryHeader = category.querySelector(selectors.categoryHeader);
    console.log (`Category: ${categoryHeader.textContent}`);
    const categoryItems = category.querySelectorAll(selectors.categoryItem);
    console.log(`Elements: ${categoryItems.length}`);
});


