// Задание 1. Дан массив mas. Выведите его в формате индекс элемента — значение (через три дефиса). Каждый элемент с новой строки.
//    const mas = [15, 'hello', 'trump', 23, 'world', 999, 176];
//    console.log(
//        `---${mas[0]}
//        ---${mas[1]}
//        ---${mas[2]}
//        ---${mas[3]}`
//    )

// Задание 2. Дан массив mas. Выведите его в формате индекс элемента — значение (через дефис). Каждый элемент с новой строки. Выводить нужно те элементы, значение которых больше пяти (5).
    // const mas = [2, 3, 4, 5, 6, 4, 77, 32, 4];
    // for(const value of mas) {
    //     if (value > 5) {
    //     console.log(- value);
    //     }
    // }

// 3) Клонирование массива  - напишите скрипт, который копирует массив не изменяя оригинал - ['Капуста', 'Репа', 'Редиска', 'Морковка'];
    // const masA = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
    // console.log(masA);
    // const obeM = masA.slice();
    // console.log(masA);
    // console.log(obeM);
    // masA.splice(masA.length,0,'Duck');
    // console.log(masA);
    // console.log(obeM);

// 4) Преобразование массива в строку - Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение. Элементы массива будут разделены запятой.

// 5) Получить последние элементы массива - Напишите код, который возвращает фрагмент массива, содержащий последние '5' элементов массива.
// 6) Разворачивание массива - напишите скрипт который развернёт массив.
// 7) Объединить два массива - объедините два массива.
// 8) Удалить определенный элемент из массива - напишите скрипт, который удалит определённый элемент из массива.
// 9) Вернуть случайный элемент из массива - веоринте случайный элемент из массива
// 10) Переместить элемент массива из одной позиции в другую - замените два соседних элемента в массиве.
// 11) Массив указанной длины - напишите скрипт который генерирует массив заданной длины 4, заполненный целыми числами, где каждое число больше предыдущего на единицу.

// CW morning
    // let i = 0;

    // do {
    //     i = Number( prompt('Введите число больше 10', '') );
    //     console.log('Вы ввели:', i);
    // } while (i<=10);


    // Создание двухмерной хрени
    // const number = 10;
    // for(let i = 0; i < number; i += 1) {
    //     for(let j = 0; j < number; j += 1) {
    //         console.log(i, j);
    //     }
    // }

    // const clients = ["Mango", "Poly", "Ajax"];
    // const clientName = "Poly2";
    // let resultMsg = "Клиента с таким именем нету в базе данных!";

    // for (const value of clients) {
    // // На каждой итерации мы будем проверять совпадает ли
    // // элемент массива с именем клиента.
    // // Если совпадает то мы записываем в resultMsg сообщение
    // // об успехе и делаем break чтобы не искать дальше

    // if (value === clientName) {
    //     resultMsg = "Клиент с таким именем есть в базе данных!";
    //     break;
    // }
    // }

    // console.log(resultMsg); // Клиент с таким именем есть в базе данных!
  
  
    //   4) Сумма элементов двух массивов - Напишите код, который создаёт массив элементов представляющих собой сумму соответствующих элементов заданных массивов.
    // [1, 2, 3, 4, 5];
    // [4, 5, 6];

        const a = [1, 2, 3, 4, 5];
        const b = [4, 5, 6];
        const c = [];
        let min = [];
        let max = [];

        // Ver.1
            if (a.length > b.length) {
                max = a;
                min = b;
            } else {
                max = b;
                min = a;
            }

            for (let i=0; i<max.length; i++) {
                    if(min[i]===undefined){
                    min[i]=0;
                    }
                    c[i] = max[i]+min[i];
                }

            console.log(c)

        // Ver.2
            // if(a.length > b.length){
            // max=a.length;
            // for(let i =0; i<max; i++){
            //     if(b[i]===undefined){
            //     b[i]=0;
            //     }
            //     add[i] = a[i]+b[i];
            // }
            // }else{
            // max=b.length;
            // for(let i =0; i<max; i++){
            //     if(a[i]===undefined){
            //     a[i]=0;
            //     }
            //     add[i] = a[i]+b[i];
            // }
            // }
            // console.log(c)