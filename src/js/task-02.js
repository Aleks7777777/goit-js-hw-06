const ingredients = [
	'Potatoes',
	'Mushrooms',
	'Garlic',
	'Tomatos',
	'Herbs',
	'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');
const arr = []
for (const elem of ingredients) {
	const item = document.createElement(`li`);
	item = classList.add(`item`);
	item.textContent = elem;
	arr.push(item);
}

ingredientsList.append(...arr);