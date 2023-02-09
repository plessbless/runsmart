$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adapptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/4/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/4/right.svg"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  dots: true
                }
            }
        ]
    });
  });





































// number число
// string - "", '' строка
// boolean true/false 
// null не существующая
// undefined что-то существует, но значения не имеет

// let obj = {       Объект
//     name: 'apple',
//     color: 'green',
//     weight: 200
// } 
// Symbol

// alert() - метод
// console.log - команда вывода в консоль
// confirm("Вам есть 18?")
// prompt("Вам есть 18?") окно с вводом текстового сообщения от пользователя

// console.log(4 - 'asd') - NaN
// console.log(4 + 'asd') - 4asd (Конкатенация)

// && - и
// || - или

// if (2*4 == 8*1) {       Условия
//     console.log('Верно')
// } else {
//     console.log('Ошибка')
// }

// for(let i = 1; i < 8; i++) {    Цикл
//     console.log(i);
// }

// function logging(a, b) {        Функции
//     console.log( a + b)
// }

// logging(3, 5);
// logging(6, 14);


