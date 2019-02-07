const data = {
    people: [
        {firstName: 'Homer', lastName: 'Simpson'},
        {firstName: 'Peter', lastName: 'Griffin'},
        {firstName: 'Eric', lastName: 'Cartman'},
        {firstName: 'Kenny', lastName: 'McCormick'},
        {firstName: 'Bart', lastName: 'Simpson'}
    ],
    temp: ['HTML','CSS','JS','React','Redax','Node']
};

// Выведем список вида имя + фамилия
    const source = document.querySelector('#example-template').innerHTML.trim();
    const templateFunc = Handlebars.compile(source);
    const markup = templateFunc(data);
    // console.log(markup);
    const container = document.querySelector('.content-placeholder');
    container.innerHTML = markup;

// Выведем список навыков, задействовав соответствующий шаблон (#example-temp)
    const newSource = document.querySelector('#example-temp').innerHTML.trim();
    // console.log(newSource);
    const tempFunc = Handlebars.compile(newSource);
    // console.log(tempFunc);
    const newMarkup = tempFunc(data);
    // console.log(newMarkup);
    // const container = document.querySelector('.content-placeholder');
    container.innerHTML += newMarkup;


