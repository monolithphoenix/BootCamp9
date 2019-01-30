// 1) При скролі сайту на велечину хедера фбо більше меню стає фіксованим
// 2) При скролі сайту меньше ніж висота хедера меню стає на почвткову позицію

// клас fixed-nav

// ===== Solution #1 =====
    // let nav = document.querySelector('.nav');
    // let header = document.querySelector('.header');

    // let fix = function(){
    //     if (pageYOffset >= header.clientHeight) {
    //         nav.classList.add('fixed-nav');
    //     } else {
    //         nav.classList.remove('fixed-nav');
    //     };

    // // or same via arrow function
    //     // pageYOffset >= header.clientHeight ? nav.classList.add('fixed-nav') : nav.classList.remove('fixed-nav');
    // }

    // window.addEventListener('scroll', fix)


// ===== CodeOptimizedVersion =====
    window.addEventListener('scroll', () => pageYOffset >= head.clientHeight ? navigation.classList.add('fixed-nav') : navigation.classList.remove('fixed-nav'))
