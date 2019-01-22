/* Task 02 M04

  Напиште скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

const tasksCompleted = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  };
  
// Решение
    let maxV = 0;
    let maxK = '';
    for (let key in tasksCompleted) {
        if (tasksCompleted[key] > maxV) {
            maxV = tasksCompleted[key];
            maxK = key;
        };
    };
    console.log(maxK + ':' + maxV);