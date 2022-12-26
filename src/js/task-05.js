const refs = {
	input: document.querySelector('#name-input'),
	span: document.querySelector('#name-output'),
}

refs.input.addEventListener('input', onInputChange);


function onInputChange(event) {
	if (event.target.value === '') {
		refs.span.textContent = 'Anonymous';
	}
	else {
		refs.span.textContent = event.target.value;
	}
}
