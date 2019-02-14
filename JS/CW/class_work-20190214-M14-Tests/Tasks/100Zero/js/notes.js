function getOne() {
    
    setInterval(function() {
        if (position === 0) {
            ARR.splice(position, 1, b);
            output.innerText = ARR.join('');
            ++position;
        } else if (position === ARR.length) {
            moveLeft();
            --position;
        } else {
            moveRight();
            ++position;
        }
      }, 100)
};

function moveRight() {
    ARR.splice(position, 1, b);
    ARR.splice(position-1, 1, a);
    output.innerText = ARR.join('');
}

function moveLeft() {
    ARR.splice(position, 1, a);
    ARR.splice(position-1, 1, b);
    output.innerText = ARR.join('');
}





function getOne() {
    let position = 0;
    setInterval(function() {
        if (position === 0) {
            ARR.splice(position, 1, b);
            output.innerText = ARR.join('');
            ++position;
        } 
        do {
            moveRight();
            ++position;
        } while (position === ARR.length)
        do {
            moveRight();
            --position;
        } while (position === 0)
        // else if (position === ARR.length) {
        //     moveLeft();
        //     --position;
        // } else {
        //     moveRight();
        //     ++position;
        // }
        function moveRight() {
            ARR.splice(position, 1, b);
            ARR.splice(position-1, 1, a);
            output.innerText = ARR.join('');
        }
        
        function moveLeft() {
            ARR.splice(position, 1, a);
            ARR.splice(position-1, 1, b);
            output.innerText = ARR.join('');
        }
        
      }, 100)
};
