let a = {
    name: {value: 'bob'},
    age: {value: 25},
};

//Получить
    // let b = {
    //     name: 'bob',
    //     age: 25,
    // };

let b = {}
console.log(b);

for (let i = 0; i < Object.keys(a).length; i++) {
    let key = Object.keys(a)[i];
    let value = Object.values(a)[i].value;
    b[key] = value;
    console.log(b);

 }

//    console.log(b);
//    console.log(Object.keys(a)[0]);
//    console.log(Object.values(a)[0].value);
