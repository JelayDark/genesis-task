"use strict";

window.onload = function () {

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
};
//# sourceMappingURL=script.js.map
