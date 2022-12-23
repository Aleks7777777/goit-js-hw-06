const buttonDecrement = document.querySelector('[data-action = decrement]');
const buttonIncrement = document.querySelector('[data-action = increment]');

let value = Number(document.querySelector('#value').textContent);
let spanValue = document.querySelector('#value')

buttonIncrement.addEventListener('click', clickToAddOne);
function clickToAddOne() {
	value += 1;
	spanValue.textContent = value;
}

buttonDecrement.addEventListener('click', clickToRemoteOne);
function clickToRemoteOne() {
	value -= 1;
	if (value <= 0) {
		value = 0;
	}
	spanValue.textContent = value;
}
