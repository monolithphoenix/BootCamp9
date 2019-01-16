// 1) Написать функцию, которая принимает год.
// 2) Возвращает нам через alert столетие, в котором этот год находится.

    // function convertYear(a) {
    //     alert(Math.floor(a/100)+1);
    // };

    // console.log(convertYear(2000));
    // console.log(convertYear(1873));
    // console.log(convertYear(675));

// 1) Написать функцию, которая принимает год.
// 2) Возвращает нам через alert сообщение высокосный ли этотгод или нет.

    // function convertYear(a) {
    //     if (a%4 === 0) {
    //         alert("Год таки высокосный");
    //     } else {
    //         alert("Введённый год не высокосный");
    //     };
    // };

    // convertYear(Number(prompt("Введите год")));

// "arguments" - зарезервированое значение переменной, специфическая перемення, псевдомассив

    function add() {
        console.log(arguments);
        let arr = Array.from(arguments);

        let total = 0;
        for (let number of arr) {
            total += number
        };
        return total;
    };

    console.log(add(5, 10, 20));
    console.log(add(1));
    console.log(add(7, 4, 3, 8, 123));
    
