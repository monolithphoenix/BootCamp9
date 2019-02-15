const a = '-';
const b = '+';
const add = document.querySelector('#add-elemant');
const stop = document.querySelector('#stop');
add.addEventListener('click', getOne);
stop.addEventListener('click', stopThisShit);


for (let i = 0; i < 50; i++) {
    output.innerText += a;
};

const ARR = Array.from(output.textContent);

function getArr() {
    ARR = Array.from(output.textContent);
    console.log(ARR);
};
function getOne() {
    let position = 0;
    let direction = {move: 'right'};
    
    timerID = setInterval(() => {
        moveScenario()        
      }, 50)

    function moveScenario() {
        if (ARR[0] === b || ARR[position-1] === b) {
            direction.move = 'right'
            console.log(0);
            console.log(position);
            
        } else if (ARR[ARR.length-1] === b || ARR[position+1] === b || ARR[position+2] === b) {
            direction.move = 'left'
            console.log(ARR.length);
        }

        if (direction.move === 'right') {
            ++position;
            moveRight();
        } else if (direction.move === 'left'){
            moveLeft();
            --position;
        }
    }

    function moveRight() {
        if (position === 0) {
            ARR.splice(position, 1, b);
            output.innerText = ARR.join('');
        } else {
            ARR.splice(position, 1, b);
            ARR.splice(position-1, 1, a);
            output.innerText = ARR.join('');
        }
    }
    
    function moveLeft() {
        ARR.splice(position, 1, a);
        ARR.splice(position-1, 1, b);
        output.innerText = ARR.join('');
    }
    
};


function stopThisShit() {
    clearInterval(timerID);
}