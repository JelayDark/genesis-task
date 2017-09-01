"use strict";

ready(function () {
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
});

// const cities = [
//     {
//         "city": "Санкт-Петербург",
//         "country": "Россия"
//     },
//     {
//         "city": "Москва",
//         "country": "Россия"
//     },
//     {
//         "city": "Ростов",
//         "country": "Россия"
//     },
//     {
//         "city": "Киев",
//         "country": "Украина"
//     },
//     {
//         "city": "Запорожье",
//         "country": "Украина"
//     },
//     {
//         "city": "Днепропетровск",
//         "country": "Украина"
//     },
//     {
//         "city": "Варшава",
//         "country": "Польша"
//     },
//     {
//         "city": "Новгород",
//         "country": "Россия"
//     },
//     {
//         "city": "Черновцы",
//         "country": "Украина"
//     }
// ]

// const input = document.querySelector('input[type=text]');
// const cityResult = document.querySelector('.cityresult');

// const auto = (value) => {
//     const val = value.toLowerCase();

//     const filter = cities.filter(city => {
//         if (city.city.toLowerCase().includes(val)) {
//             return city.city.toLowerCase().includes(val);
//         } else if (city.country.toLowerCase().includes(val)) {
//             return city.country.toLowerCase().includes(val);
//         }
//     })

//     if (filter.length > 0) {
//         filter.forEach((item, i) => {
//             cityResult.innerHTML += '<li class="result-item">' + item.city + ', ' + item.country + '</li>';
//         });

//         if(filter.length > 8)  {
//             cityResult.style.overflowY = "scroll";
//         } else {
//             cityResult.style.overflowY = "hidden";
//         }
//     } else {
//         cityResult.innerHTML = '<li class="result-no">Увы, но такого города нет.. </li>';
//         cityResult.style.overflowY = "hidden";
//     }
// }

// input.onkeyup = (e) => {
//     cityResult.innerHTML = '';
//     auto(input.value);
// }

// document.onclick = (e) => {
//     if(e.target.classList.contains('clear')) {
//         input.value = '';
//         input.focus();
//     } else {
//         if(e.target.classList.contains('result-item')) {
//             input.value = e.target.innerHTML;
//         }
//         cityResult.innerHTML = '';
//     }
// }
"use strict";

function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

// ready(function(){
//   alert("DOM fully lo");
// });

var girls = [{
    "gender": "Девушка",
    "name": "Кариночка",
    "photo": "karinochka",
    "age": 28,
    "city": "Санкт-Петербург, Россия",
    "isFavorite": false,
    "isOnline": false,
    "howManyPh": 12,
    "isTop": true
}, {
    "gender": "Девушка",
    "name": "Диана",
    "photo": "diana",
    "age": 20,
    "city": "Самара, Россия",
    "isFavorite": false,
    "isOnline": true,
    "howManyPh": 3,
    "isTop": true
}, {
    "gender": "Девушка",
    "name": "Аня",
    "photo": "anya",
    "age": 18,
    "city": "Ростов-на-Дону, Россия",
    "isFavorite": false,
    "isOnline": true,
    "howManyPh": 145,
    "isTop": true
}, {
    "gender": "Девушка",
    "name": "Анжелика",
    "photo": "anjelika",
    "age": 27,
    "city": "Чебоксары, Россия",
    "isFavorite": false,
    "isOnline": false,
    "howManyPh": 17,
    "isTop": false
}, {
    "gender": "Девушка",
    "name": "Лариса",
    "photo": "larisa",
    "age": 32,
    "city": "Москва, Россия",
    "isFavorite": false,
    "isOnline": true,
    "howManyPh": 12,
    "isTop": false
}, {
    "gender": "Девушка",
    "name": "Настя",
    "photo": "nastya",
    "age": 21,
    "city": "Зеленоград, Россия",
    "isFavorite": true,
    "isOnline": false,
    "howManyPh": 3,
    "isTop": false
}, {
    "gender": "Девушка",
    "name": "Евгения",
    "photo": "eugenia",
    "age": 30,
    "city": "Ростов-на-Дону, Россия",
    "isFavorite": false,
    "isOnline": false,
    "howManyPh": 4,
    "isTop": false
}, {
    "gender": "Девушка",
    "name": "Ольга",
    "photo": "olga",
    "age": 25,
    "city": "Казань, Россия",
    "isFavorite": false,
    "isOnline": false,
    "howManyPh": 28,
    "isTop": false
}, {
    "gender": "Девушка",
    "name": "Кариночка",
    "photo": "karinochka",
    "age": 28,
    "city": "Санкт-Петербург, Россия",
    "isFavorite": false,
    "isOnline": false,
    "howManyPh": 12,
    "isTop": true
}, {
    "gender": "Девушка",
    "name": "Кариночка",
    "photo": "karinochka",
    "age": 28,
    "city": "Санкт-Петербург, Россия",
    "isFavorite": false,
    "isOnline": false,
    "howManyPh": 12,
    "isTop": true
}, {
    "gender": "Девушка",
    "name": "Кариночка",
    "photo": "karinochka",
    "age": 28,
    "city": "Санкт-Петербург, Россия",
    "isFavorite": false,
    "isOnline": false,
    "howManyPh": 12,
    "isTop": true
}, {
    "gender": "Девушка",
    "name": "Кариночка",
    "photo": "karinochka",
    "age": 28,
    "city": "Санкт-Петербург, Россия",
    "isFavorite": false,
    "isOnline": false,
    "howManyPh": 12,
    "isTop": true
}, {
    "gender": "Девушка",
    "name": "Кариночка",
    "photo": "karinochka",
    "age": 28,
    "city": "Санкт-Петербург, Россия",
    "isFavorite": false,
    "isOnline": false,
    "howManyPh": 12,
    "isTop": true
}, {
    "gender": "Девушка",
    "name": "Кариночка",
    "photo": "karinochka",
    "age": 28,
    "city": "Санкт-Петербург, Россия",
    "isFavorite": false,
    "isOnline": false,
    "howManyPh": 12,
    "isTop": true
}, {
    "gender": "Девушка",
    "name": "Кариночка",
    "photo": "karinochka",
    "age": 28,
    "city": "Санкт-Петербург, Россия",
    "isFavorite": false,
    "isOnline": false,
    "howManyPh": 12,
    "isTop": true
}, {
    "gender": "Девушка",
    "name": "Кариночка",
    "photo": "karinochka",
    "age": 28,
    "city": "Санкт-Петербург, Россия",
    "isFavorite": false,
    "isOnline": false,
    "howManyPh": 12,
    "isTop": true
}, {
    "gender": "Девушка",
    "name": "Кариночка",
    "photo": "karinochka",
    "age": 28,
    "city": "Санкт-Петербург, Россия",
    "isFavorite": false,
    "isOnline": false,
    "howManyPh": 12,
    "isTop": true
}];

ready(function () {
    var pageCount = Math.ceil(girls.length / 8) - 1;
    var sliderFirstLine = document.getElementsByClassName('list-result')[0];
    // const sliderSecondLine = document.getElementsByClassName('list-result')[1];
    var pagNav = document.getElementsByClassName('pag-nav')[0];
    var onPageMax = 8;
    console.log(window.innerWidth);
    // if (window.innerWidth);
    var pageNow = 0;

    var pagDrow = function pagDrow(pageCount) {
        pageCount < 1 ? pagNav.style.display = "none" : pagNav.style.display = "block";
        pagNav.innerHTML += "<li class = \"page-num\"><span class=\"page-prev\">&lt;</span></li>";
        for (var i = 0; i <= pageCount; i++) {
            pagNav.innerHTML += "<li class=\"page-num\"><span class=\"pn\">" + (i + 1) + "</span></li>";
        }
        pagNav.innerHTML += "<li class = \"page-num\"><span class=\"page-next\">&gt;</span></li>";

        document.getElementsByClassName('pn')[pageNow].classList.add("active");
    };

    var doList = function doList(object) {
        return "\n                            <li class=\"res-item\">\n                                <figure class=\"result\">\n                                    <div class=\"photo\">\n                                        <img src=\"images/" + object.photo + ".jpg\" alt=\"bigbabe\">\n                                        <a href=\"\" class=\"count-ph\">\n                                            <span>ph</span> <!-- photo icon -->\n                                            <span>" + object.howManyPh + "</span> <!-- count of photoes -->\n                                        </a>\n                                        <a href=\"\" class=\"" + (object.isTop ? "top" : "top-no") + "\">\u0422\u043E\u043F</a>\n                                    </div>\n                                    <figcaption>\n                                        <ul class=\"like-menu\">\n                                            <li class=\"menu-item\"><a href=\"\">\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435</a></li>\n                                            <li class=\"menu-item\"><a href=\"\">\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C</a></li>\n                                        </ul>\n                                        <div class=\"info\">\n                                            <p>" + object.name + ", " + object.age + " <span class=\"" + (object.isOnline ? "online" : "online-no") + "\"></span></p>\n                                            <p class=\"info-city\">" + object.city + "</p>\n                                        </div>\n                                    </figcaption>\n                                </figure>\n                            </li>";
    };

    var changePage = function changePage(e) {
        if (e.target.classList.contains('page-prev')) {
            --pageNow < 0 ? pageNow = 0 : document.getElementsByClassName('active')[0].classList.remove("active"), document.getElementsByClassName('pn')[pageNow].classList.add("active");
            sliderFirstLine.innerHTML = '';
            for (var i = 0 + pageNow * onPageMax; i < onPageMax + pageNow * onPageMax; i++) {
                sliderFirstLine.innerHTML += doList(girls[i]);
            }
        } else if (e.target.classList.contains('page-next')) {
            // document.getElementsByClassName('active')[0].classList.remove("active");
            ++pageNow > pageCount ? pageNow = pageCount : document.getElementsByClassName('active')[0].classList.remove("active"), document.getElementsByClassName('pn')[pageNow].classList.add("active");
            // document.getElementsByClassName('pn')[pageNow].classList.add("active");
            sliderFirstLine.innerHTML = '';
            for (var _i = 0 + pageNow * onPageMax; _i < onPageMax + pageNow * onPageMax; _i++) {
                sliderFirstLine.innerHTML += doList(girls[_i]);
            }
        } else if (e.target.classList.contains('pn')) {
            document.getElementsByClassName('active')[0].classList.remove("active");
            pageNow = e.target.innerHTML - 1;
            document.getElementsByClassName('pn')[pageNow].classList.add("active");
            sliderFirstLine.innerHTML = '';
            for (var _i2 = 0 + pageNow * onPageMax; _i2 < onPageMax + pageNow * onPageMax; _i2++) {
                sliderFirstLine.innerHTML += doList(girls[_i2]);
            }
        }
    };

    for (var i = 0 + pageNow * onPageMax; i < onPageMax + pageNow * onPageMax; i++) {
        sliderFirstLine.innerHTML += doList(girls[i]);
    }

    pagDrow(pageCount);

    document.addEventListener("click", changePage, false);
});
"use strict";

// ready( () => {

//     const sliderElem = document.getElementById('range');
// const thumbMin = document.getElementById('thumb-min');
// const thumbMax = document.getElementById('thumb-max');
// // let thumbMin = sliderElem.children[0];
// const sliderCoords = getCoords(sliderElem);
// const rangeEnd = sliderElem.offsetWidth - thumbMin.offsetWidth;
// const MAX_YEAR = 58;
// // let rangeEnd = sliderElem.offsetWidth;

// let min = parseInt(getComputedStyle(thumbMin).left);
// let max = parseInt(getComputedStyle(thumbMax).left);

// let mintext = parseInt(parseInt(getComputedStyle(thumbMin).left)/(rangeEnd/(MAX_YEAR-18))) + 18;
// thumbMin.children[0].innerHTML = mintext;
// let maxtext = parseInt(parseInt(getComputedStyle(thumbMax).left)/(rangeEnd/(MAX_YEAR-18))) + 18;
// thumbMax.children[0].innerHTML = maxtext;

// thumbMin.onmousedown = (e) => {
//     let thumbCoords = getCoords(thumbMin);
//     let shiftX = e.pageX - thumbCoords.left;


//     document.onmousemove = (e) => {
//         let newLeft = e.pageX - shiftX - sliderCoords.left;

//         //если вне слайдера
//         if (newLeft < 0) {
//             newLeft = 0;
//         }

//         if (newLeft > max - thumbMin.offsetWidth / 2) {
//             newLeft = max - thumbMin.offsetWidth / 2;
//         }

//         if (!(max-newLeft>thumbMin.offsetWidth*1.5)) {
//             thumbMin.children[0].style.top = "-26px";
//         } else {
//             thumbMin.children[0].style.top = "13px";
//         }

//         min = newLeft;
//         // mintext = parseInt(newLeft/(rangeEnd/(MAX_YEAR-18)));
//         thumbMin.children[0].innerHTML = parseInt(newLeft/(rangeEnd/(MAX_YEAR-18))) + 18;
//         thumbMin.style.left = newLeft + 'px';
//     }

//     document.onmouseup = () => {
//         document.getElementById('year-min').value = thumbMin.children[0].innerHTML;
//         document.onmousemove = document.onmouseup = null;
//     }

//     return false;
// };

// thumbMax.onmousedown = (e) => {
//     let thumbCoords = getCoords(thumbMax);
//     let shiftX = e.pageX - thumbCoords.left;

//     document.onmousemove = (e) => {
//         let newLeft = e.pageX - shiftX - sliderCoords.left;

//         //если вне слайдера
//         if (newLeft < min + thumbMin.offsetWidth / 2) {
//             newLeft = min + thumbMin.offsetWidth / 2;
//         }

//         if (newLeft > rangeEnd) {
//             newLeft = rangeEnd;
//         }

//         if (!(newLeft - min > thumbMin.offsetWidth * 1.5)) {
//             thumbMin.children[0].style.top = "-26px";
//         } else {
//             thumbMin.children[0].style.top = "13px";
//         }

//         max = newLeft;
//         // maxtext = parseInt(newLeft/(rangeEnd/(MAX_YEAR-18)));
//         thumbMax.children[0].innerHTML = parseInt(newLeft/(rangeEnd/(MAX_YEAR-18))) + 18;

//         thumbMax.style.left = newLeft + 'px';
//     }

//     document.onmouseup = () => {
//         document.onmousemove = document.onmouseup = null;
//         document.getElementById('year-max').value = thumbMax.children[0].innerHTML;
//         // console.log('max: ', document.getElementById('year-max').value);
//     }

//     return false;
// };

// thumbMin.ondragstart = () => false;

// function getCoords(elem) {
//     let box = elem.getBoundingClientRect();

//     return {
//         top: box.top + pageYOffset,
//         left: box.left + pageXOffset
//     };
// }


// })

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

ready(function () {
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
});

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
