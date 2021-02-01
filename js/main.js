'use strict';
{
	const counter = document.getElementById('counter');
	counter.addEventListener('click', () =>{
		let n = counter.textContent;
		let num = parseInt(counter.textContent, 10);
		n = num + 1;
		console.log(n);
	});
}
