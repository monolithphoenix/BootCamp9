let sectionArr = [{
    classes: 'fa-mars',
    sectionYear: 1879,
    title: 'Albert Einstein born',
    text: 'Albert Einstein is born in Ulm, Germany, the son of Hermann Einstein, a German Jewish featherbed salesman, and his wife Pauline.',
},
{
    classes:'fa-magnet',
    sectionYear: 1884,
    title: 'Mystery of Magnetism',
    text: "At the age of five, Albert Einstein becomes fascinated by his father's pocket compass, intrigued by invisible forces that cause the needle always to point north. Later in life, Einstein will look back at this moment as the genesis of his interest in science.",
},
{
    classes: 'fa-plane',
    sectionYear: 1894,
    title: 'Move to Italy',
    text: 'Struggling financially, the Einstein family moves from Germany to Italy in search of better work. Albert, aged fifteen, stays behind in Munich to finish his schooling, but soon either quits or is kicked out of his high school and follows his parents to Italy.',
},
{
    classes: 'fa-ban',
    sectionYear: 1895,
    title: 'Boarding School in Aarau',
    text: 'Albert Einstein attempts to get out of his last year of high school by taking an entrance exam to ETH, the Swiss Polytechnic University in Zurich. He fails the test, forcing him to attend one final year of high school in the small town of Aarau, Switzerland, instead.',
},
{
    classes: 'fa-university',
    sectionYear: 1896,
    title: 'Einstein at ETH',
    text: 'Albert Einstein graduates from high school and begins attending ETH, the prestigious Swiss Polytechnic University in Zurich.',
},
{
    classes:'fa-graduation-cap',
    sectionYear: 1900,
    title: 'College Graduation',
    text: 'Albert Einstein graduates from ETH with a degree in physics. He tries to find a teaching job, but is unable to obtain work.',
},
{
    classes:'fa-briefcase',
    sectionYear: 1902,
    title: 'Swiss Patent Office',
    text: 'Unable to find any work as a teacher or academic, Albert Einstein takes a job as a clerk at the Swiss Patent Office.',
},
{
    classes:'fa-files-o',
    sectionYear: 1905,
    title: 'Annus Mirabilis',
    text: 'Over the course of a year that he will later describe as his "Annus Mirabilis" - his miraculous year - Albert Einstein publishes four major theoretical papers in the prestigious German academic journal Annalen Der Physik. The four papers include a groundbreaking new interpretation of the photoelectric effect as well as the first published exploration of the theory of Special Relativity and the first formulation of the famous equation E = mc2',
},
{
    classes:'fa-file-o',
    sectionYear: 1915,
    title: 'General Theory of Relativity',
    text: 'Einstein completes his General Theory of Relativity.',
},
{
    classes:'fa-thumbs-up',
    sectionYear: 1919,
    title: 'Eclipse Proves Theory of Relativity',
    text: "A solar eclipse provides dramatic observable evidence that Einstein's General Theory of Relativity is correct. Einstein suddenly becomes a worldwide celebrity.",
},
{
    classes:'fa-trophy',
    sectionYear: 1921,
    title: 'Nobel Prize',
    text: 'Albert Einstein wins the Nobel Prize in Physics for his work on the photoelectric effect, first published in 1905.',
},
{
    classes:'fa-envelope',
    sectionYear: 1939,
    title: 'Letter to President Roosevelt',
    text: "Fearing that Nazi scientists might win the race to develop the world's first atomic bombs, Albert Einstein writes a letter to President Franklin D. Roosevelt, urging him to launch an American program of nuclear research.",
},
{
    classes:'fa-death',
    sectionYear: 1955,
    title: 'Death of Albert Einstein',
    text: 'Albert Einstein dies of heart failure at the age of 76.',
}
]



// ===== CREATE element =====
    const root = document.querySelector('.root');

    // start header
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    // end header

    //start main
    const main = document.createElement('main');
    const mainDiv = document.createElement('div');
    const mainDivDiv = document.createElement('div');
    const mainDivDivFigure = document.createElement('figure');
    const mainDivDivFigureImg = document.createElement('img');
    const mainDivDivFigureFigcaption = document.createElement('figcaption');

    const mainDivDiv2 = document.createElement('div');
    const mainDivDiv2P = document.createElement('p');
    const mainDivDiv2PStrong = document.createElement('strong');

    const mainDivQuote = document.createElement('div');
    const mainBlockquote = document.createElement('blockquote');

    const mainDivTimeline = document.createElement('div');
    const mainDivTimelineH2 = document.createElement('h2');

    
    // end main

// ===== ADD classes =====


// ===== ADD atribute =====
h1.setAttribute('id','title');
main.setAttribute('id','main');
mainDiv.setAttribute('id','first-row');
mainDivDiv.setAttribute('id','img-div');
mainDivDivFigureImg.setAttribute('id','image');
mainDivDivFigureImg.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg');
mainDivDivFigureImg.setAttribute('alt','Profile picture of Albert Einstein.');
mainDivDivFigureFigcaption.setAttribute('id','img-caption');
mainDivDiv2.setAttribute('id','tribute-info');
mainDivQuote.setAttribute('id','quote');


// ===== ADD text =====
h1.textContent = 'Albert Einstein';
mainDivDivFigureFigcaption.textContent = 'Profile picture of Albert Einstein';
mainDivDiv2PStrong.textContent = 'Albert Einstein';
mainDivDiv2P.textContent = " was a German-born theoretical physicist. He developed the theory of relativity, one of the two pillars of modern physics. Einstein's work is also known for its influence on the philosophy of science. Einstein is best known in popular culture for his mass-energy equivalence formula. He received the 1921 Nobel Prize in Physics for his services to theoretical physics, and especially for his discovery of the law of the photoelectric effect, a pivotal step in the evolution of quantum theory.";
mainBlockquote.textContent = 'Anyone who has never made a mistake has never tried anything new';

// ===== PASTE to page =====
root.append(header);
    header.append(h1);
root.append(main);
    main.append(mainDiv);
        mainDiv.append(mainDivDiv);
            mainDivDiv.append(mainDivDivFigure);
                mainDivDivFigure.append(mainDivDivFigureImg);
                mainDivDivFigure.append(mainDivDivFigureFigcaption);
            mainDiv.append(mainDivDiv2);
                mainDivDiv2.append(mainDivDiv2P);
                mainDivDiv2P.prepend(mainDivDiv2PStrong);
    main.append(mainDivQuote);
        mainDivQuote.append(mainBlockquote);
    main.append(mainDivTimeline);
        mainDivTimeline.append(mainDivTimelineH2);






// ===== CONSOLE =====
console.log(root);