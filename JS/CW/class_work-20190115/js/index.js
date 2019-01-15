// Проверка на то, является ли строка полиндромом

    // const string = prompt("Let's check whether your word is a palindrome. Enter your word:");
    // let rev = string.split("")
    //     console.log(rev);
    // rev = rev.reverse();
    //     console.log(rev);
    // rev = rev.join("");
    //     console.log(rev);
    // string === rev ? alert("Yes, it`s palindrome") : alert ("No, it`s not palindrome")

// Цикл на while

    // let counter = 1;
    // while(counter <= 5) {
    //     console.log(counter);
    //     counter++;
    // }
    
// Цикл на for

    // let arr = [1, 236, 56, 8, 97, 14];
    // for(let i = 0, max = arr.length; i < max; i+1) {
    //     console.log(counter);
    //     counter++;
    // }

// for of (для массивов, работает аналогично записи выше)

    // let arr = [1, 236, 56, 8, 97, 14];
    // for(let el of arr) {
    //     console.log(el);
    // }

// Написать алгоритм, который создаст массив, элементами которого будут другие массивы

    // const result = [];
    // const lengthFirstArr = Number(prompt("Enter length of parent array"));
    // const lengthSecondArr = Number(prompt("Enter length of child array"));
    // for (let i = 0; i < lengthFirstArr; i++) {
    //     const arr = [];
    //     for (let j = 0; j < lengthSecondArr; j+=1) {
    //         arr.push(j);
    //     }
    //     result.push(arr);
    // }
    // console.log(result);
    
// Написать алгоритм который распределить людей в команды.
// 1) Пользователь вводит количество команд
// 2) Пользователь вводит количество людей в команде
// 3) Программа рандомно наполняет масивы именами
// 4) Имена не должны повторятся (Один пользователь должен быть только в одной команде. Имя не должно повторятся в других командах.)

    // const namesArr = ['Albert','Isaac', 'Galileo', 'Marie', 'Johannes', 'Nicolaus', 'Max', 'Katherine', 'Ada', 'Sarah', 'Lise','Hanna'];

    // const copySourse = namesArr.slice();
    // const teamsQuantity = Number(prompt("Enter quantity of teams"));
    // const membersQuantity = Number(prompt("Enter quantity of members of team"));
    // const result = [];

    // // copySourse.splise(Math.floor(Math.random()*copySourse.length),1)
    // for(let i = 0; i < teamsQuantity; i++) {
    //     const team = [];
    //     for(let j = 0; j < membersQuantity; j++) {
    //         team.push(copySourse.splice(Math.floor(Math.random()*copySourse.length),1).toString());
    //     }
    //     result.push(team);
    // }

    // console.table(result);

// Написать программу которая будет отвечать за список покупок
// 1) В диалоговое окно вводим количество покупок которое хотим сделать;
// 2) Сколько покупок столько раз появится окно где юзер пишет фразу "Название товара:цена" Например ("Булочка:5")
// 3) После ввода всех товаров алертом вывести суму покупок;

    // const productsQuantity = Number(prompt("Давайте посчитаем сумму чека. Вверите количество товаров, которое Вы купили"));
    // let sum = 0;

    // for(i = 0; i < productsQuantity; i++) {
    //     const price = Number(prompt("Название товара:цена").split(':').pop());
    //     console.log(price);
        
    //     sum = sum + price;
    // }
    // console.log(sum);
    // alert("Сумма покупки: " + sum.toFixed(2))

// 1) Данно оригинальний масив let arr = [5,10,15,20,25,30,35,40];
// 2) Данно масив з остатком let result = [10,20,35];
// 3) Получить масив удаленых чисел; // [5,15,25,30,40];

    // let arr = [5,10,15,20,25,30,35,40];
    // let result = [10,20,35];

    // let del = [];
    // for (let el of arr) {
    //     if (!result.includes(el)) {
    //         del.push(el);
    //     }
    // }

    // console.log(del);
    
// Написать программу которая находит разницу значений двух масивов
// 1) [1, 2, 3], [100, 2, 1, 10] // [3, 10, 100]

    // let arrA = [1, 2, 3];
    // let arrB = [100, 2, 1, 10];

    // let arrC = [];
    // for (let el of arrA) {
    //     if (!arrB.includes(el)) {
    //         arrC.push(el);
    //     }
    // }
    // for (let el of arrB) {
    //     if (!arrA.includes(el)) {
    //         arrC.push(el);
    //     }
    // }
    // console.log(arrC);

// Есть массив [1,2,5,10,12,5,3,2,8,3]

    // let arr = [1,2,5,10,12,5,3,2,8,3];

    // let resultArr = [];
    // for (let el of arr) {
    //     let count = 0;
    //     for (let otherEl of arr) {
    //         if (el === otherEl) {
    //             count++;
    //         }
    //     }
    //     if (count === 1) {
    //         resultArr.push(el);
    //     }
    // }
    // console.log(resultArr);   

//  Написать код который удалит из масива  null, 0, "", false, undefined, NaN
// 1) let start =  [NaN, 0, 15, false, -22, '',undefined, 47, null];
// 2) Должны получить на виходе let result = [15, -22, 47];