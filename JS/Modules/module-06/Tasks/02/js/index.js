// Module 06
/* Task 02
  Напишите ES6 класс StringBuilder.
  
  На вход (в конструкторе) он получает один параметр string - строку,
  которую записывает в поле value.
  
  Добавьте классу следующие методы:
  
    - getValue() - возвращает текущее значение поля value
  
    - append(str) - получает парметр str - строку и добавляет 
      ее в конец значения поля value
    
    - prepend(str) - получает парметр str - строку и добавляет 
      ее в начало значения поля value
  
    - pad(str) - получает парметр str - строку и добавляет 
      ее в начало и в конец значения поля value
*/
class StringBuilder {
  constructor (string) {
    this.value = string;
  };
  getValue() {
    return this.value;
  };
  append(str) {
    this.value = this.value + str;
  };
  prepend(str) {
    this.value = str + this.value;
  };
  pad(str) {
    this.value = str + this.value + str;
  };
};


const builder = new StringBuilder('.');


builder.append('^'); 
console.log(builder.getValue()); // '.^'

builder.prepend('^'); 
console.log(builder.getValue()); // '^.^'

builder.pad('='); 
console.log(builder.getValue()); // '=^.^='
