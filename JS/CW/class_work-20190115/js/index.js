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

// Написать програму которая будет отвечать за список покупок
// 1) В диалоговое окно вводим количество покупок которое хотим сделать;
// 2) Сколько покупок столько раз появится окно где юзер пишет фразу "Название товара:цена" Например ("Булочка:5")
// 3) После ввода всех товаров алертом вывести суму покупок;

    const productsQuantity = Number(prompt("Давайте посчитаем сумму чека. Вверите количество товаров, которое Вы купили"));
    let sum = 0;

    for(i = 0; i < productsQuantity; i++) {
        const price = Number(prompt("Название товара:цена").split(':').pop());
        console.log(price);
        
        sum = sum + price;
    }
    console.log(sum);
    alert("Сумма покупки: " + sum.toFixed(2))
