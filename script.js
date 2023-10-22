'use strict';
// Задача 1
// Запрограммируйте поведение кнопки по нажатию на нее (она меняет текст в 
// span)
// function buttonClick(){
//     let elem = document.getElementById('elem');
//     elem.innerHTML = '1';
// }
// Задача 2
// Запрограммируйте  поведение кнопки по нажатию на нее (она меняет span на тег b, 
// не изменяя при этом текст внутри тега)
// function buttonClick(){
//     let elem = document.getElementById('elem');
//     elem.outerHTML = '<b>'+elem.innerHTML+'</b>';
// }
// Задча 3
// Дан HTML код. Поменяйте содержимое абзацев на их порядковый номер в 
// коде.
// function func(){
//     let elems = document.getElementsByTagName('p');
//     for(let i = 0; i<elems.length; i++){
//         elems[i].innerHTML = i+1;
//     }
// }
// Задача 4
// Дан HTML код. Поменяйте содержимое элементов с классом "а" на их 
// порядковый номер в коде.
// function func(){
//     let elems = document.getElementsByClassName('a');
//     for(let i = 0;i<elems.length;i++){
//         elems[i].innerHTML = i+1;
//     }
// }
// Задача 5
// Дан HTML код. Поменяйте содержимое абзацев с классом "а" на их 
// порядковый номер в коде
// function func(){
//         let elems = document.querySelectorAll('.a');
//         for(let i = 0;i<elems.length;i++){
//             elems[i].innerHTML = i+1;
//         }
// }


//Задача 1
function buttonClick(){
        let elem = document.getElementById('elem');
        elem.innerHTML = '<span >Куку! А я</span>,<strong>жирный</strong>!';
}

//Задача 2
function buttonClickTwo(){
    let elems = document.getElementById('elems');
    elems.innerHTML = '<h3>Абзац превратился в h3</h3>';
}

//Задача 3
function buttonClickThree(){
    let text = document.getElementById('text');
    text.innerHTML = '<h3>При нажатии на кнопку текст в абзаце станет h3, но текст останется.</h3>';
}

//Задача 4
function func2(){
    let elems1 = document.getElementById('input1');
    let elems2 = document.getElementById('input2');
    let result = document.getElementById('result');
    result.innerHTML = Number(elems1.value) + Number(elems2.value) 
    return result
    }

 //Задача 5
function func(){
            let elems = document.querySelectorAll('p');
             for(let i = 0;i<elems.length;i++){
                 elems[i].innerHTML = i;
             }
            }