// Задача 1
    // 1) Створити 3 змінних (камінь ножиці папір).
    // 2) Записати варіант користувача в змінну.
    // 3) Создати змінну в яку запишеться варіант компютера.
    // 4) Зрівняти змінну юзера і компютера:
    // 4,1) Якщо змінні однакові тоді нічия (Вивести результат)
    // 4,2) Якщо змінні різні: 
    // 4,2,2) Опрацювати варіанти перемоги юзера (Вивести результат)
    // 4,2,3) Інакше виграв комп. (Вивести результат)

// Решение
    // const rock = 1, scissors = 2, papper = 3;

    // const userChoise = Number(prompt("Для выбора камень введите 1, ножницы - 2, бумага - 3"));

    // const pcChoise = Math.floor(Math.random() * (4 - 1)) + 1;

    // if (pcChoise === rock) {
    //     alert("Компьютер выбрал камень");
    // } else if (pcChoise === scissors) {
    //     alert("Компьютер выбрал ножницы");
    // } else if (pcChoise === papper){
    //     alert("Компьютер выбрал бумагу");
    // } else {
    //     alert("Проверь код, в нём ошибка");
    // }

    // if (userChoise === pcChoise) {
    //     alert("Ничья");
    // } else if (userChoise === rock && pcChoise === scissors || userChoise === scissors && pcChoise === papper || userChoise === papper && pcChoise === rock) {
    //     alert("Компьютер повержен, Вы победили!");
    // } else {
    //     alert("Компьютер одержал верх, Вы проиграли...");
    // }

// Задача 2
    // Создать калькулятор обмена валют

// Решение
    const userSum = Number(prompt("Put your sum"));
    const userCurency = prompt("Choose your curency: EUR, USD or UAH");
    console.log(userSum);
    
    if (userCurency === "EUR") {
        alert(`You can change it for ${userSum * 1.15} USD or ${userSum * 32.15} UAH`);
    } else if (userCurency === "USD") {
        alert(`You can change it for ${userSum * 0.87} EUR or ${userSum * 28.03} UAH`);
    } else {
        alert(`You can change it for ${userSum * 0.036} USD or ${userSum * 0.031} EUR`);
    }
