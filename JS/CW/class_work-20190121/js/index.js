// Method Arr.map
    // const money = [100, 200, 300, 400, 500];

    // V1


    // V2
        // let result = money.map(function(el){
        //     return el * 0.7;
        // });

    // V3
        // let result = money.map(el => el * 0.7);

    // console.log(result);


    const scientist = [{
        first: 'Albert',
        last: 'Einstein',
        year: 1879,
        passed: 1955
    },
    {
        first: 'Isaac',
        last: 'Newton',
        year: 1643,
        passed: 1727
    },
    {
        first: 'Galileo',
        last: 'Galilei',
        year: 1564,
        passed: 1642
    },
    {
        first: 'Marie',
        last: 'Curie',
        year: 1867,
        passed: 1934
    },
    {
        first: 'Johannes',
        last: 'Kepler',
        year: 1571,
        passed: 1630
    },
    {
        first: 'Nicolaus',
        last: 'Copernicus',
        year: 1473,
        passed: 1543
    },
    {
        first: 'Max',
        last: 'Planck',
        year: 1858,
        passed: 1947
    },
    {
        first: 'Katherine',
        last: 'Blodgett',
        year: 1898,
        passed: 1979
    },
    {
        first: 'Ada',
        last: 'Lovelace',
        year: 1815,
        passed: 1852
    },
    {
        first: 'Sarah E.',
        last: 'Goode',
        year: 1855,
        passed: 1905
    },
    {
        first: 'Lise',
        last: 'Meitner',
        year: 1878,
        passed: 1968
    },
    {
        first: 'Hanna',
        last: 'Hammarström',
        year: 1829,
        passed: 1909
    }
];

// 1) отримати масив вчених що народилися в 19 ст

    // V1
        // const result = scientist.filter(function (el) {
        //     if (el.year > 1799 && el.year < 1900) {
        //        return el
        //     }
        // });
    // V2
        const result = scientist.filter(el => el.year > 1799 && el.year < 1900);

    console.log(result);
    
// 2) знайти суму років скільки прожили всі вченні

    // V1
        // const sumYears = scientist.reduce( function (acc, value) {
        //     return acc + value.passed - value.year
        // }, 0);

    // V2
        const sumYears = scientist.reduce((acc, value) => acc + value.passed - value.year, 0);
    
    console.log(sumYears);
    
// 3) Відсортувати вчених по алфавіту

    // V1
        const sortABC = scientist.sort((a, b) => a.first > b.first ? 1 : -1).slice();
   
    console.log(sortABC)

// 4) Відсортувати вчених по даті народження

    // V1
        // const sortBirthday = scientist.sort((a, b) => a.year > b.year ? 1 : -1);
    // V2
        const sortBirthday = scientist.sort((a, b) => a.year - b.year).slice();
    
    console.log(sortBirthday);
    
// 5) Відсортувати вчених по кількості прожитих років
    const liveLong = scientist.sort((a, b) => (a.passed-a.year) - (b.passed-b.year)).slice();
    console.log(liveLong);
    
// 6) Видалити з масива вчених що родилися в 15 або 16 або 17 столітті
    const no151617 = scientist.filter(obj => obj.year > 1700);
    console.log(no151617);
    

// 7) Знайти вченого який народився найпізніше.
    const lastBorn = scientist.sort((a, b) => b.year - a.year).slice();
    console.log(lastBorn[0]);

// 8) Знайти рік народження Albert Einstein
    const findAE = scientist.find(obj => obj.first === 'Albert' && obj.last === 'Einstein');
    console.log(findAE);
    console.log(findAE.year);
    
// 9) Знайти вчених прізвище яких починається на літеру С
    const lastC = scientist.filter(el => el.last[0].includes('C'));
    console.log(lastC);
    
// 10) Видалити з масива всіх вчених імя яких починається на A
    const firstNoA = scientist.filter(el => !el.first[0].includes('A'));
    console.log(firstNoA);
    
