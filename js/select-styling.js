document.addEventListener("DOMContentLoaded", function(event) {
    alert("DOM fully loaded and parsed");
  });

window.onload = function() {
    var originalSelect = document.getElementById('gender');
    var select = document.getElementById('select-display');
    var dropdown = document.getElementsByClassName('dropdown-select')[0];
    select.onclick = function() {
        dropdown.classList.toggle('collapsed');
    }

    // document.onclick = function() {
    //     if(!dropdown.classList.contains('collapsed')){
    //         dropdown.classList.remove('collapsed');
    //         dropdown.style.height=0;
    //     }
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
}