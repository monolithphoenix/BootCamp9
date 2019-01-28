// function makeArrayConsecutive2(arr) {
//     let sort = arr.sort((a, b) => a - b);
//     let counter = sort[0];
//     let num = 0;
//     for (i=0; i<sort.length; i++) {
//         if (counter === sort[i]) {
//             counter++;
//             continue;
//         } else {
//             for (j=counter; j < sort[i]; j++) {
//                     num++;
//                     counter++;
//                     console.log(num);
//                     // console.log(counter);
//         }
//         // console.log(sort);
        
//         // console.log(counter);
//         // console.log(num);
//     }
//     }
//     return num;

// }

// const arr = [3, 7, 10, 5, 2];

// makeArrayConsecutive2(arr);
// // console.log(makeArrayConsecutive2(arr));\


function makeArrayConsecutive2(statues) {
    let sort = statues.sort((a,b) => a-b);
    let result;
    let test = sort[sort.length-1] - sort[0] +1;
    result = test - sort.length;
    console.log(result);
    return result
}

makeArrayConsecutive2([8,2,3,4,5, 100])