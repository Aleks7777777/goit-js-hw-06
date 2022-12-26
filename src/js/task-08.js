const refs = {
	form: document.querySelector('.login-form')
}

refs.form.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
	event.preventDefault();

	const formElement = event.currentTarget.elements;
	const mail = formElement.email.value;
	const password = formElement.password.value;

	if (formElement.email.value === '' || formElement.password.value === '') {

		alert('Будь ласка, заповніть всі поля');

	} else {
		const formData = {
			mail,
			password,
		};
		console.log(formData);
	}
	refs.form.reset();
}