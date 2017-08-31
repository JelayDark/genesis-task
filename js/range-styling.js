window.onload = function() {

    //DROPDOWN
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

    //RANGE


    var sliderElem = document.getElementById('range');
    var thumbMin = document.getElementById('thumb-min');
    var thumbMax = document.getElementById('thumb-max');
    // var thumbMin = sliderElem.children[0];
    var sliderCoords = getCoords(sliderElem);
    var rangeEnd = sliderElem.offsetWidth - thumbMin.offsetWidth;
    var MAX_YEAR = 58;
    // var rangeEnd = sliderElem.offsetWidth;

    var min = parseInt(getComputedStyle(thumbMin).left);
    var max = parseInt(getComputedStyle(thumbMax).left);

    var mintext = parseInt(parseInt(getComputedStyle(thumbMin).left)/(rangeEnd/(MAX_YEAR-18))) + 18;
    thumbMin.children[0].innerHTML = mintext;
    var maxtext = parseInt(parseInt(getComputedStyle(thumbMax).left)/(rangeEnd/(MAX_YEAR-18))) + 18;
    thumbMax.children[0].innerHTML = maxtext;
    
    

    console.log(min, max);
//минимум - 18, максимум - 58

    thumbMin.onmousedown = function(e) {
        var thumbCoords = getCoords(thumbMin);
        var shiftX = e.pageX - thumbCoords.left;


        document.onmousemove = function(e) {
            var newLeft = e.pageX - shiftX - sliderCoords.left;

            //если вне слайдера
            if (newLeft < 0) {
                newLeft = 0;
            }

            if (newLeft > max - thumbMin.offsetWidth / 2) {
                newLeft = max - thumbMin.offsetWidth / 2;
            }

            if (!(max-newLeft>thumbMin.offsetWidth*1.5)) {
                thumbMin.children[0].style.top = "-26px";
            } else {
                thumbMin.children[0].style.top = "13px";
            }

            min = newLeft;
            // mintext = parseInt(newLeft/(rangeEnd/(MAX_YEAR-18)));
            thumbMin.children[0].innerHTML = parseInt(newLeft/(rangeEnd/(MAX_YEAR-18))) + 18;
            thumbMin.style.left = newLeft + 'px';
        }

        document.onmouseup = function() {
            document.getElementById('year-min').value = thumbMin.children[0].innerHTML;
            document.onmousemove = document.onmouseup = null;
        }

        return false;
    };

    thumbMax.onmousedown = function(e) {
        var thumbCoords = getCoords(thumbMax);
        var shiftX = e.pageX - thumbCoords.left;

        document.onmousemove = function(e) {
            var newLeft = e.pageX - shiftX - sliderCoords.left;

            //если вне слайдера
            if (newLeft < min + thumbMin.offsetWidth / 2) {
                newLeft = min + thumbMin.offsetWidth / 2;
            }

            if (newLeft > rangeEnd) {
                newLeft = rangeEnd;
            }

            if (!(newLeft - min > thumbMin.offsetWidth * 1.5)) {
                thumbMin.children[0].style.top = "-26px";
            } else {
                thumbMin.children[0].style.top = "13px";
            }

            max = newLeft;
            // maxtext = parseInt(newLeft/(rangeEnd/(MAX_YEAR-18)));
            thumbMax.children[0].innerHTML = parseInt(newLeft/(rangeEnd/(MAX_YEAR-18))) + 18;

            thumbMax.style.left = newLeft + 'px';
        }

        document.onmouseup = function() {
            document.onmousemove = document.onmouseup = null;
            document.getElementById('year-max').value = thumbMax.children[0].innerHTML;
            // console.log('max: ', document.getElementById('year-max').value);
        }

        return false;
    };

    thumbMin.ondragstart = function() {
        return false;
    };

    function getCoords(elem) {
        var box = elem.getBoundingClientRect();

        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    }
}