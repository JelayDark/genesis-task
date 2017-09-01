"use strict";

var cities = [{
    "city": "Санкт-Петербург",
    "country": "Россия"
}, {
    "city": "Москва",
    "country": "Россия"
}, {
    "city": "Ростов",
    "country": "Россия"
}, {
    "city": "Киев",
    "country": "Украина"
}, {
    "city": "Запорожье",
    "country": "Украина"
}, {
    "city": "Днепропетровск",
    "country": "Украина"
}, {
    "city": "Варшава",
    "country": "Польша"
}, {
    "city": "Новгород",
    "country": "Россия"
}, {
    "city": "Черновцы",
    "country": "Украина"
}];

var input = document.querySelector('input[type=text]');
var cityResult = document.querySelector('.cityresult');

var auto = function auto(value) {
    var val = value.toLowerCase();

    var filter = cities.filter(function (city) {
        if (city.city.toLowerCase().includes(val)) {
            return city.city.toLowerCase().includes(val);
        } else if (city.country.toLowerCase().includes(val)) {
            return city.country.toLowerCase().includes(val);
        }
    });

    if (filter.length > 0) {
        filter.forEach(function (item, i) {
            cityResult.innerHTML += '<li class="result-item">' + item.city + ', ' + item.country + '</li>';
        });

        if (filter.length > 8) {
            cityResult.style.overflowY = "scroll";
        } else {
            cityResult.style.overflowY = "hidden";
        }
    } else {
        cityResult.innerHTML = '<li class="result-no">Увы, но такого города нет.. </li>';
        cityResult.style.overflowY = "hidden";
    }
};

input.onkeyup = function (e) {
    cityResult.innerHTML = '';
    auto(input.value);
};

document.onclick = function (e) {
    if (e.target.classList.contains('clear')) {
        input.value = '';
        input.focus();
    } else {
        if (e.target.classList.contains('result-item')) {
            input.value = e.target.innerHTML;
        }
        cityResult.innerHTML = '';
    }
};
"use strict";

window.onload = function () {

    var sliderElem = document.getElementById('range');
    var thumbMin = document.getElementById('thumb-min');
    var thumbMax = document.getElementById('thumb-max');
    // let thumbMin = sliderElem.children[0];
    var sliderCoords = getCoords(sliderElem);
    var rangeEnd = sliderElem.offsetWidth - thumbMin.offsetWidth;
    var MAX_YEAR = 58;
    // let rangeEnd = sliderElem.offsetWidth;

    var min = parseInt(getComputedStyle(thumbMin).left);
    var max = parseInt(getComputedStyle(thumbMax).left);

    var mintext = parseInt(parseInt(getComputedStyle(thumbMin).left) / (rangeEnd / (MAX_YEAR - 18))) + 18;
    thumbMin.children[0].innerHTML = mintext;
    var maxtext = parseInt(parseInt(getComputedStyle(thumbMax).left) / (rangeEnd / (MAX_YEAR - 18))) + 18;
    thumbMax.children[0].innerHTML = maxtext;

    thumbMin.onmousedown = function (e) {
        var thumbCoords = getCoords(thumbMin);
        var shiftX = e.pageX - thumbCoords.left;

        document.onmousemove = function (e) {
            var newLeft = e.pageX - shiftX - sliderCoords.left;

            //если вне слайдера
            if (newLeft < 0) {
                newLeft = 0;
            }

            if (newLeft > max - thumbMin.offsetWidth / 2) {
                newLeft = max - thumbMin.offsetWidth / 2;
            }

            if (!(max - newLeft > thumbMin.offsetWidth * 1.5)) {
                thumbMin.children[0].style.top = "-26px";
            } else {
                thumbMin.children[0].style.top = "13px";
            }

            min = newLeft;
            // mintext = parseInt(newLeft/(rangeEnd/(MAX_YEAR-18)));
            thumbMin.children[0].innerHTML = parseInt(newLeft / (rangeEnd / (MAX_YEAR - 18))) + 18;
            thumbMin.style.left = newLeft + 'px';
        };

        document.onmouseup = function () {
            document.getElementById('year-min').value = thumbMin.children[0].innerHTML;
            document.onmousemove = document.onmouseup = null;
        };

        return false;
    };

    thumbMax.onmousedown = function (e) {
        var thumbCoords = getCoords(thumbMax);
        var shiftX = e.pageX - thumbCoords.left;

        document.onmousemove = function (e) {
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
            thumbMax.children[0].innerHTML = parseInt(newLeft / (rangeEnd / (MAX_YEAR - 18))) + 18;

            thumbMax.style.left = newLeft + 'px';
        };

        document.onmouseup = function () {
            document.onmousemove = document.onmouseup = null;
            document.getElementById('year-max').value = thumbMax.children[0].innerHTML;
            // console.log('max: ', document.getElementById('year-max').value);
        };

        return false;
    };

    thumbMin.ondragstart = function () {
        return false;
    };

    function getCoords(elem) {
        var box = elem.getBoundingClientRect();

        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    }
};
"use strict";

var originalSelect = document.getElementById('gender');
var select = document.getElementById('select-display');
var dropdown = document.getElementsByClassName('dropdown-select')[0];
select.onclick = function () {
        dropdown.classList.toggle('collapsed');
};
// document.onclick = function() {
//     if(!dropdown.classList.contains('collapsed')){
//         dropdown.classList.remove('collapsed');
//         dropdown.style.height=0;
//     }
// }
var fem = document.getElementById('female');
var male = document.getElementById('male');

// document.onclick = (e) => {
//         dropdown.classList.toggle('collapsed');
// }

dropdown.onclick = function (e) {
        originalSelect.value = select.innerHTML = e.target.innerHTML;
        dropdown.classList.toggle('collapsed');
};
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
//# sourceMappingURL=script.js.map
