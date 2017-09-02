"use strict"

ready(() => {
	const originalSelect = document.getElementById('gender');
	const select = document.getElementById('select-display');
	const dropdown = document.getElementsByClassName('dropdown-select')[0];
	select.onclick = () => {
		dropdown.classList.toggle('collapsed');
	}
	// document.onclick = function() {
	//     if(!dropdown.classList.contains('collapsed')){
	//         dropdown.classList.remove('collapsed');
	//         dropdown.style.height=0;
	//     }
	// }
	const fem = document.getElementById('female');
	const male = document.getElementById('male');

	// document.onclick = (e) => {
	//         dropdown.classList.toggle('collapsed');
	// }

	dropdown.onclick = (e) => {
		originalSelect.value = select.innerHTML = e.target.innerHTML;
		dropdown.classList.toggle('collapsed');
	}
})

// fem.onclick = () => {
//         select.innerHTML = fem.innerHTML;
//         dropdown.classList.toggle('collapsed');
//         originalSelect.value = fem.innerHTML;
// }
// male.onclick = () => {
//         select.innerHTML = male.innerHTML;
//         dropdown.classList.toggle('collapsed');
//         originalSelect.value = male.innerHTML;
// }
