// Объекты
    
    const americano = {
        name: 'Americano',
        type: 'Arabica',
        size: 'Medium',
        hasMilk: false,
        sugar: true,
        price: 25,
        currency: 'UAH',
        id: 35,
        toppings: [
          {
            name: 'Chocolate',
            price: 2,
            currency: 'UAH'
          },
          {
            name: 'Murshmellow',
            price: 3,
            currency: 'UAH'
          }
        ],
    };
    // console.log(americano);
    // console.log(americano.name); // Такая форма записи используется, если мы знаем имя ключа
    // console.log(americano.price);
    // console.log(americano.toppings[0].name);


    // console.log(americano['type']); // Этот вариант вызова используется, если имя ключа нам точно не известно и оно берётся из какой-то переменной (например параметр функции)


    // const key = 'type';
    // console.log(americano[key]); // Равносильно предыдущему csl


    // function showValue (obj, key) {
    //     return obj[key]; // americano['type']
    // };
    // showValue (americano, 'type');


    americano.newkey = 'qwerty'; // Создаст новый ключ newkey.
    americano.price = 50; // Перезапишет значение ключа price.
    // console.log(americano.price);
    // console.log(americano);
    
    
    delete americano.newkey; // Таким образом можно удалить ключ из объекта.


    let hasName = americano.hasOwnProperty('name'); // hasOwnProperty проверяет есть ли искомый ключ в объекте. Вернёт значение true, если в объекте есть ключ name.
    let hasName2 = 'name' in americano; // Этот вариант, сделает тоже самое.


// Продолжим...
        const hotel = {
            name: 'name',
            stars: 'stars',
        };
    // Следующая форма записи появилась в ES6 и является сокращённым вариантом предыдущей записи.
        // let hotel = {
        //     name,   // = name: name
        //     stars,  // = stars: stars
        // };
    
    // Для переборки всех ключей объекта используют цикл for..of
        for ( let key in hotel ) {
            if (hotel.hasOwnProperty(key)) {    // if здесь для того чтобы перебирались только свои ключи, исключая методы JS (proto). Это предпочтительный вид переборки ключей объекта.
                console.log(hotel[key]);
            }
        }


        const keys = Object.keys(hotel);        // Выдаст массив, элементами которого будут ключи объекта hotel.
        const values = Object.values(hotel);    // Выдаст массив, элементами которого будут значения ключей объекта hotel.


        let copy = Object.assign({},hotel);     // 
        hotel.id = 25;
        console.log(hotel);
        console.log(copy);
