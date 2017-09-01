"use strict"

function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

// ready(function(){
//   alert("DOM fully lo");
// });

const girls = [
    {
        "gender": "Девушка",
        "name": "Кариночка",
        "photo": "karinochka",
        "age": 28,
        "city": "Санкт-Петербург, Россия",
        "isFavorite": false,
        "isOnline": false,
        "howManyPh": 12,
        "isTop": true
    },
    {
        "gender": "Девушка",
        "name": "Диана",
        "photo": "diana",
        "age": 20,
        "city": "Самара, Россия",
        "isFavorite": false,
        "isOnline": true,
        "howManyPh": 3,
        "isTop": true
    },
     {
        "gender": "Девушка",
        "name": "Аня",
        "photo": "anya",
        "age": 18,
        "city": "Ростов-на-Дону, Россия",
        "isFavorite": false,
        "isOnline": true,
        "howManyPh": 145,
        "isTop": true
    },
    {
        "gender": "Девушка",
        "name": "Анжелика",
        "photo": "anjelika",
        "age": 27,
        "city": "Чебоксары, Россия",
        "isFavorite": false,
        "isOnline": false,
        "howManyPh": 17,
        "isTop": false
    },
    {
        "gender": "Девушка",
        "name": "Лариса",
        "photo": "larisa",
        "age": 32,
        "city": "Москва, Россия",
        "isFavorite": false,
        "isOnline": true,
        "howManyPh": 12,
        "isTop": false
    },
    {
        "gender": "Девушка",
        "name": "Настя",
        "photo": "nastya",
        "age": 21,
        "city": "Зеленоград, Россия",
        "isFavorite": true,
        "isOnline": false,
        "howManyPh": 3,
        "isTop": false
    },
    {
        "gender": "Девушка",
        "name": "Евгения",
        "photo": "eugenia",
        "age": 30,
        "city": "Ростов-на-Дону, Россия",
        "isFavorite": false,
        "isOnline": false,
        "howManyPh": 4,
        "isTop": false
    },
    {
        "gender": "Девушка",
        "name": "Ольга",
        "photo": "olga",
        "age": 25,
        "city": "Казань, Россия",
        "isFavorite": false,
        "isOnline": false,
        "howManyPh": 28,
        "isTop": false
    },
    {
        "gender": "Девушка",
        "name": "Кариночка",
        "photo": "karinochka",
        "age": 28,
        "city": "Санкт-Петербург, Россия",
        "isFavorite": false,
        "isOnline": false,
        "howManyPh": 12,
        "isTop": true
    },
    {
        "gender": "Девушка",
        "name": "Кариночка",
        "photo": "karinochka",
        "age": 28,
        "city": "Санкт-Петербург, Россия",
        "isFavorite": false,
        "isOnline": false,
        "howManyPh": 12,
        "isTop": true
    },
    {
        "gender": "Девушка",
        "name": "Кариночка",
        "photo": "karinochka",
        "age": 28,
        "city": "Санкт-Петербург, Россия",
        "isFavorite": false,
        "isOnline": false,
        "howManyPh": 12,
        "isTop": true
    },
    {
        "gender": "Девушка",
        "name": "Кариночка",
        "photo": "karinochka",
        "age": 28,
        "city": "Санкт-Петербург, Россия",
        "isFavorite": false,
        "isOnline": false,
        "howManyPh": 12,
        "isTop": true
    },
    {
        "gender": "Девушка",
        "name": "Кариночка",
        "photo": "karinochka",
        "age": 28,
        "city": "Санкт-Петербург, Россия",
        "isFavorite": false,
        "isOnline": false,
        "howManyPh": 12,
        "isTop": true
    },
    {
        "gender": "Девушка",
        "name": "Кариночка",
        "photo": "karinochka",
        "age": 28,
        "city": "Санкт-Петербург, Россия",
        "isFavorite": false,
        "isOnline": false,
        "howManyPh": 12,
        "isTop": true
    },
    {
        "gender": "Девушка",
        "name": "Кариночка",
        "photo": "karinochka",
        "age": 28,
        "city": "Санкт-Петербург, Россия",
        "isFavorite": false,
        "isOnline": false,
        "howManyPh": 12,
        "isTop": true
    },
    {
        "gender": "Девушка",
        "name": "Кариночка",
        "photo": "karinochka",
        "age": 28,
        "city": "Санкт-Петербург, Россия",
        "isFavorite": false,
        "isOnline": false,
        "howManyPh": 12,
        "isTop": true
    },
    {
        "gender": "Девушка",
        "name": "Кариночка",
        "photo": "karinochka",
        "age": 28,
        "city": "Санкт-Петербург, Россия",
        "isFavorite": false,
        "isOnline": false,
        "howManyPh": 12,
        "isTop": true
    }
]

ready(() => {
    const pageCount = Math.ceil(girls.length / 8) - 1;
    const sliderFirstLine = document.getElementsByClassName('list-result')[0];
    // const sliderSecondLine = document.getElementsByClassName('list-result')[1];
    const pagNav = document.getElementsByClassName('pag-nav')[0];
    let onPageMax = 8;
    console.log(window.innerWidth);
    // if (window.innerWidth);
    let pageNow = 0;

    const pagDrow = (pageCount) => {
        pageCount < 1 ? pagNav.style.display = "none" : pagNav.style.display = "block";
        pagNav.innerHTML += `<li class = "page-num"><span class="page-prev">&lt;</span></li>`;
        for (let i = 0; i <= pageCount; i++) {
            pagNav.innerHTML += `<li class="page-num"><span class="pn">${i + 1}</span></li>`
        }
        pagNav.innerHTML += `<li class = "page-num"><span class="page-next">&gt;</span></li>`;

        document.getElementsByClassName('pn')[pageNow].classList.add("active");
    }


    const doList = (object) => {
        return( `
                            <li class="res-item">
                                <figure class="result">
                                    <div class="photo">
                                        <img src="images/${object.photo}.jpg" alt="bigbabe">
                                        <a href="" class="count-ph">
                                            <span>ph</span> <!-- photo icon -->
                                            <span>${object.howManyPh}</span> <!-- count of photoes -->
                                        </a>
                                        <a href="" class="${object.isTop ? "top" : "top-no"}">Топ</a>
                                    </div>
                                    <figcaption>
                                        <ul class="like-menu">
                                            <li class="menu-item"><a href="">Избранное</a></li>
                                            <li class="menu-item"><a href="">Написать</a></li>
                                        </ul>
                                        <div class="info">
                                            <p>${object.name}, ${object.age} <span class="${object.isOnline ? "online" : "online-no"}"></span></p>
                                            <p class="info-city">${object.city}</p>
                                        </div>
                                    </figcaption>
                                </figure>
                            </li>`
                );
    }
    
    const changePage = (e) => {
        if (e.target.classList.contains('page-prev')) {
            --pageNow < 0 ? pageNow = 0 : document.getElementsByClassName('active')[0].classList.remove("active"), document.getElementsByClassName('pn')[pageNow].classList.add("active");
            sliderFirstLine.innerHTML = '';
            for(let i = 0 + pageNow * onPageMax; i < onPageMax + pageNow * onPageMax; i++) {
                sliderFirstLine.innerHTML += doList(girls[i]);
            }
        } else if (e.target.classList.contains('page-next')) {
            // document.getElementsByClassName('active')[0].classList.remove("active");
            ++pageNow > pageCount ? pageNow = pageCount : document.getElementsByClassName('active')[0].classList.remove("active"), document.getElementsByClassName('pn')[pageNow].classList.add("active");
            // document.getElementsByClassName('pn')[pageNow].classList.add("active");
            sliderFirstLine.innerHTML = '';
            for(let i = 0 + pageNow * onPageMax; i < onPageMax + pageNow * onPageMax; i++) {
                sliderFirstLine.innerHTML += doList(girls[i]);
            }
        } else if (e.target.classList.contains('pn')) {
            document.getElementsByClassName('active')[0].classList.remove("active");
            pageNow = e.target.innerHTML - 1;
            document.getElementsByClassName('pn')[pageNow].classList.add("active");
            sliderFirstLine.innerHTML = '';
            for(let i = 0 + pageNow * onPageMax; i < onPageMax + pageNow * onPageMax; i++) {
                sliderFirstLine.innerHTML += doList(girls[i]);
            }
        }
    }

    for(let i = 0 + pageNow * onPageMax; i < onPageMax + pageNow * onPageMax; i++) {
        sliderFirstLine.innerHTML += doList(girls[i]);
    }

    pagDrow(pageCount);

    document.addEventListener("click", changePage, false);
})
