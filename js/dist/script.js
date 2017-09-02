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
                // input.value = e.target.innerHTML;
                input.setAttribute('value', e.target.innerHTML);
                console.log('input', input, 'value: ', input.value);
            }
            cityResult.innerHTML = '';
        }
    };
});
"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

var initialGirls = [{
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
    var girls = initialGirls;
    var sliderFirstLine = document.getElementsByClassName('list-result')[0];
    var pagNav = document.getElementsByClassName('pag-nav')[0];

    var onPageMax = void 0; // количество фотографий на странице
    var maxPag = void 0; // количество элементов пгинации, видимых на экране

    if (window.innerWidth < 480) {
        onPageMax = 1;
        maxPag = 0;
    } else if (window.innerWidth < 768) {
        onPageMax = 2;
        maxPag = 3;
    } else if (window.innerWidth < 1025) {
        onPageMax = 6;
        maxPag = 5;
    } else {
        onPageMax = 8;
        maxPag = 7;
    }
    var pageCount = Math.ceil(girls.length / onPageMax) - 1;

    var pageNow = 0;

    var pagDrow = function pagDrow(thisnow) {
        pagNav.innerHTML = '';
        pageCount < 1 ? pagNav.style.display = "none" : pagNav.style.display = "block";
        pagNav.innerHTML += "<li class = \"page-num\"><span class=\"page-prev\">&lt;</span></li>";
        if (maxPag > 0) {
            if (pageCount >= maxPag) {
                if (pageCount - thisnow - 1 >= (maxPag - 1) / 2 && thisnow > (maxPag - 1) / 2) {
                    for (var i = thisnow + 1 - (maxPag - 1) / 2; i < thisnow + 2 + (maxPag - 1) / 2; i++) {
                        pagNav.innerHTML += "<li class=\"page-num\"><span class=\"pn\">" + i + "</span></li>";
                    }
                    document.getElementsByClassName('pn')[(maxPag - 1) / 2].classList.add("active");
                } else if (pageCount - thisnow - 1 < (maxPag - 1) / 2) {
                    for (var _i = pageCount - maxPag + 2; _i < pageCount + 2; _i++) {
                        pagNav.innerHTML += "<li class=\"page-num\"><span class=\"pn\">" + _i + "</span></li>";
                    }
                    document.getElementsByClassName('pn')[maxPag - (pageCount - thisnow + 1)].classList.add("active");
                } else {
                    for (var _i2 = 0; _i2 < maxPag; _i2++) {
                        pagNav.innerHTML += "<li class=\"page-num\"><span class=\"pn\">" + (_i2 + 1) + "</span></li>";
                    }
                    document.getElementsByClassName('pn')[thisnow].classList.add("active");
                }
            } else {
                for (var _i3 = 0; _i3 <= pageCount; _i3++) {
                    pagNav.innerHTML += "<li class=\"page-num\"><span class=\"pn\">" + (_i3 + 1) + "</span></li>";
                }
                document.getElementsByClassName('pn')[thisnow].classList.add("active");
            }
        }
        pagNav.innerHTML += "<li class = \"page-num\"><span class=\"page-next\">&gt;</span></li>";
    };

    var doList = function doList(object) {
        if (object != undefined) {
            return "\n                                <li class=\"res-item\">\n                                    <figure class=\"result\">\n                                        <div class=\"photo\">\n                                            <img src=\"images/" + object.photo + ".jpg\" alt=\"bigbabe\">\n                                            <a href=\"\" class=\"count-ph\">\n                                                <span class = \"camera\"></span> <!-- photo icon -->\n                                                <span>" + object.howManyPh + "</span> <!-- count of photoes -->\n                                            </a>\n                                            <a href=\"\" class=\"" + (object.isTop ? "top" : "top-no") + "\">\u0422\u043E\u043F</a>\n                                        </div>\n                                        <figcaption>\n                                            <ul class=\"like-menu\">\n                                                <li class=\"menu-item\"><a href=\"\"><span class=\"" + (object.isFavorite ? "star-fullwhite" : "star-white") + "\"></span>\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435</a></li>\n                                                <li class=\"menu-item\"><a href=\"\"><span class=\"mail\"></span>\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C</a></li>\n                                            </ul>\n                                            <div class=\"info\">\n                                                <p>" + object.name + ", " + object.age + " <span class=\"" + (object.isOnline ? "online" : "online-no") + "\"></span></p>\n                                                <p class=\"info-city\">" + object.city + "</p>\n                                            </div>\n                                        </figcaption>\n                                    </figure>\n                                </li>";
        } else {
            var neededHeight = document.querySelector('.res-item').offsetHeight;
            return "\n                        <li class=\"res-item\" style = \"height: " + neededHeight + "px\"></li>";
        }
    };

    var showList = function showList() {
        console.log(girls);
        console.log(sliderFirstLine.offsetHeight);
        sliderFirstLine.innerHTML = '';
        for (var i = 0 + pageNow * onPageMax; i < onPageMax + pageNow * onPageMax; i++) {
            sliderFirstLine.innerHTML += doList(girls[i]);
        }
    };

    var changePage = function changePage(e) {
        if (e.target.classList.contains('page-prev')) {
            --pageNow < 0 ? pageNow = 0 : showList();
            pagDrow(pageNow);
        } else if (e.target.classList.contains('page-next')) {
            ++pageNow > pageCount ? pageNow = pageCount : showList();
            pagDrow(pageNow);
        } else if (e.target.classList.contains('pn')) {
            e.target.innerHTML - 1 == pageNow ? false : pageNow = e.target.innerHTML - 1, showList(), pagDrow(pageNow);
        }
    };
    showList();
    pagDrow(pageNow);

    document.addEventListener("click", changePage, false);

    window.onresize = function () {
        //Перерисовываю поиск при изменении размеров окна браузера
        console.log(window.innerWidth);
        if (window.innerWidth < 480) {
            onPageMax = 1;
            maxPag = 0;
        } else if (window.innerWidth < 768) {
            onPageMax = 2;
            maxPag = 3;
        } else if (window.innerWidth < 1025) {
            onPageMax = 6;
            maxPag = 5;
        } else {
            onPageMax = 8;
            maxPag = 7;
        }
        showList();
        pageNow = 0;
        pagDrow(pageNow);
    };

    //////SEARCHING
    var formSearchButton = document.getElementsByClassName('button-search')[0];

    formSearchButton.onclick = function (e) {
        //SEARCHING GIRLS
        e.preventDefault();
        var valueCity = document.querySelector('input[type=text]').getAttribute('value');
        var valueGender = document.querySelector('select').value;
        var valueAgeMin = document.getElementById('year-min').value;
        var valueAgeMax = document.getElementById('year-max').value;
        girls = girls.filter(function (girl) {
            if (valueGender === girl.gender && valueCity === girl.city && girl.age <= valueAgeMax && girl.age >= valueAgeMin) {
                return girl;
            }
        });

        pageCount = Math.ceil(girls.length / onPageMax) - 1;

        if (girls.length) {
            showList();
        } else {
            sliderFirstLine.innerHTML = "<div class='errorfound'>Никого не найдено. Для повторной попытки нажмите 'Новые'</div>";
        }

        pageNow = 0;
        pagDrow(pageNow);
    };

    //FILTERING
    var isOnlineButton = document.getElementsByClassName('menu-switcher')[0].children[0];
    isOnlineButton.onclick = function (e) {
        e.preventDefault();
        girls = girls.filter(function (girl) {
            if (girl.isOnline === true) return girl;
        });
        pageCount = Math.ceil(girls.length / onPageMax) - 1;
        showList();
        pageNow = 0;
        pagDrow(pageNow);
    };

    var isPopularButton = document.getElementsByClassName('menu-switcher')[0].children[2];
    isPopularButton.onclick = function (e) {
        e.preventDefault();
        girls = girls.filter(function (girl) {
            if (girl.isFavorite === true || girl.isTop === true) return girl;
        });

        pageCount = Math.ceil(girls.length / onPageMax) - 1;
        showList();

        pageNow = 0;
        pagDrow(pageNow);
    };

    var goNew = document.getElementsByClassName('menu-switcher')[0].children[1];
    goNew.onclick = function (e) {
        e.preventDefault();
        girls = initialGirls;

        pageCount = Math.ceil(girls.length / onPageMax) - 1;
        showList();

        pageNow = 0;
        pagDrow(pageNow);
    };

    //Adding as Favourite only MarkUp
    var likeD = document.getElementsByClassName('star-fullwhite');
    var likeNo = document.getElementsByClassName('star-white');

    var dolike = function dolike(e) {
        e.preventDefault();
        console.log(e.target.children[0]);
        if (e.target.children[0].classList.contains('star-fullwhite')) {
            e.target.children[0].classList.remove('star-fullwhite');
            e.target.children[0].classList.add('star-white');
        } else {
            e.target.children[0].classList.remove('star-white');
            e.target.children[0].classList.add('star-fullwhite');
        }
    };
    [].concat(_toConsumableArray(likeD)).forEach(function (like) {
        like.parentNode.addEventListener("click", dolike, false);
    });

    [].concat(_toConsumableArray(likeNo)).forEach(function (like) {
        like.parentNode.addEventListener("click", dolike, false);
    });
});
"use strict";

ready(function () {
    var menuButton = document.getElementsByClassName('min-menu')[0];
    var menu = document.getElementsByClassName('min-menu-wrapper')[0];
    var closeButton = document.getElementsByClassName('close-menu')[0];
    menuButton.onclick = function () {
        menu.classList.toggle('menu-collapsed');
    };
    closeButton.onclick = function () {
        menu.classList.toggle('menu-collapsed');
    };

    var moreButton = document.getElementsByClassName('more-search')[0];
    var moreBlock = document.getElementsByClassName('block-addon')[0];
    var arrowOpen = document.getElementsByClassName('arrow-down')[1];
    moreButton.onclick = function () {
        moreBlock.classList.toggle('more-opened');
        arrowOpen.classList.toggle('arrow-opened');
    };
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
    document.getElementById('year-min').setAttribute('value', mintext);
    var maxtext = parseInt(parseInt(getComputedStyle(thumbMax).left) / (rangeEnd / (MAX_YEAR - 18))) + 18;
    thumbMax.children[0].innerHTML = maxtext;
    document.getElementById('year-max').setAttribute('value', maxtext);

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
            document.getElementById('year-min').setAttribute('value', thumbMin.children[0].innerHTML);
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
            // document.getElementById('year-max').value = thumbMax.children[0].innerHTML;
            document.getElementById('year-max').setAttribute('value', thumbMax.children[0].innerHTML);
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

    var totooButton = document.getElementById('scroll-top');

    var timer = void 0;
    var scrollTop = function scrollTop() {
        var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
        if (top > 0) {
            window.scrollBy(0, -100);
            timer = setTimeout(scrollTop, 20);
        } else clearTimeout(timer);
        // return false;
    };

    totooButton.onclick = function () {
        return scrollTop();
    };
});
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
		var genNeed = void 0; //будущий value
		select.innerHTML = e.target.innerHTML;
		if (e.target.innerHTML === "Девушку") {
			genNeed = "Девушка";
		} else {
			genNeed = "Парень";
		}
		originalSelect.setAttribute('value', genNeed);
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
