let btn = document.querySelector('button');
let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	let klasa = document.querySelector('select[name="klasa"');
	let imie = document.querySelector('input[name="imie"]');
	let nazwisko = document.querySelector('input[name="nazwisko"]');
	let stanowisko = document.querySelector('select[name="stanowisko"');

	/*let jklasa = JSON.stringify({klasa : klasa.value});
	let jimie = JSON.stringify({imie : imie.value});
	let jnazwisko = JSON.stringify({nazwisko : nazwisko.value});
	let jstanowisko = JSON.stringify({stanowisko : stanowisko.value});

	console.log(jklasa+jimie+jnazwisko+jstanowisko);
	sessionStorage.setItem("klasa",jklasa);
	sessionStorage.setItem("imie",jimie);
	sessionStorage.setItem("nazwisko",jnazwisko);
	sessionStorage.setItem("stanowisko",jstanowisko);*/

	let jason = JSON.stringify({klasa : klasa.value,imie : imie.value,nazwisko : nazwisko.value,stanowisko : stanowisko.value});
	console.log(jason);

	sessionStorage.setItem("dane",jason);
});
