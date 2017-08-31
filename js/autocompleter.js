"use strict"

window.onload = () => {

    const cities = [
        {
            "city": "Санкт-Петербург",
            "country": "Россия"
        },
        {
            "city": "Москва",
            "country": "Россия"
        },
        {
            "city": "Ростов",
            "country": "Россия"
        },
        {
            "city": "Киев",
            "country": "Украина"
        },
        {
            "city": "Запорожье",
            "country": "Украина"
        },
        {
            "city": "Днепропетровск",
            "country": "Украина"
        },
        {
            "city": "Варшава",
            "country": "Польша"
        },
        {
            "city": "Новгород",
            "country": "Россия"
        },
        {
            "city": "Черновцы",
            "country": "Украина"
        }
    ]

    const input = document.querySelector('input[type=text]');
    const cityResult = document.querySelector('.cityresult');

    const auto = (value) => {
        const val = value.toLowerCase();

        const filter = cities.filter(city => {
            if (city.city.toLowerCase().includes(val)) {
                return city.city.toLowerCase().includes(val);
            } else if (city.country.toLowerCase().includes(val)) {
                return city.country.toLowerCase().includes(val);
            }
        })

        if (filter.length > 0) {
            filter.forEach((item, i) => {
                cityResult.innerHTML += '<li class="result-item">' + item.city + ', ' + item.country + '</li>';
            });

            if(filter.length > 8)  {
                cityResult.style.overflowY = "scroll";
            } else {
                cityResult.style.overflowY = "hidden";
            }
        } else {
            cityResult.innerHTML = '<li class="result-no">Увы, но такого города нет.. </li>';
            cityResult.style.overflowY = "hidden";
        }
    }

    input.onkeyup = (e) => {
        cityResult.innerHTML = '';
        auto(input.value);
    }

    document.onclick = (e) => {
        if(e.target.classList.contains('clear')) {
            input.value = '';
            input.focus();
        } else {
            if(e.target.classList.contains('result-item')) {
                input.value = e.target.innerHTML;
            }
            cityResult.innerHTML = '';
        }
    }










}