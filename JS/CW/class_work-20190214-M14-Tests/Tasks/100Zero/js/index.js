const a = '-';
const b = '+';
const btn = document.querySelector('#add-elemant')
btn.addEventListener('click', getOne);

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
    setInterval(function() {
        if (ARR[0] === 1) {
            direction.move = 'right'
        } else if (ARR[ARR.length-1] === 1) {
            direction.move = 'left'
        }

        // if (position === 0) {
        //     ARR.splice(position, 1, b);
        //     output.innerText = ARR.join('');
        //     ++position;
        // } else 
        if (direction.move === 'right') {
            moveRight();
            ++position;
        } else if (direction.move === 'left'){
            moveLeft();
            --position;
        }
        console.log(position);
        
      }, 100)

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
    
};

