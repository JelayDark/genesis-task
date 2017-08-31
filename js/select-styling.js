console.log('STARTED');

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
  });

window.onload = function() {
    console.log("HERE");
    var originalSelect = document.getElementById('gender');
    var select = document.getElementById('select-display');
    var dropdown = document.getElementsByClassName('dropdown-select')[0];
    select.onclick = function () {
        dropdown.classList.toggle('collapsed');
    }
    // document.onclick = function() {
    //     console.log(dropdown.classList.contains('collapsed'), 'elem: ', dropdown);
    //     if (!dropdown.classList.contains('collapsed')) {
    //         console.log('yes');
    //         dropdown.classList.toggle('collapsed');
    //     } else console.log('no');
    // }
    var selectItem = document.getElementsByClassName('select-item');
    var fem = document.getElementById('female');
    var male = document.getElementById('male');
    fem.onclick = function() {
            select.innerHTML = fem.innerHTML;
            dropdown.classList.toggle('collapsed');
            originalSelect.value = fem.innerHTML;
            console.log(originalSelect.value);
    }
    male.onclick = function() {
            select.innerHTML = male.innerHTML;
            dropdown.classList.toggle('collapsed');
            originalSelect.value = male.innerHTML;
            console.log(originalSelect.value);
    }

    // console.log(select.value);
}