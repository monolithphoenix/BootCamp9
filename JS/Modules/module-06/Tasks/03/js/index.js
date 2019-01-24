// Module 06
/* Task 03
  Создайте класс Car с указанными полями и методами.
*/

class Car {
  constructor(maxSpeed) {
    /*
      Добавьте свойства:
        - speed - для отслеживания текущей скорости, изначально 0.
        
        - maxSpeed - для хранения максимальной скорости 
        
        - running - для отслеживания заведен ли автомобиль, 
          возможные значения true или false. Изначально false.
          
        - distance - содержит общий киллометраж, изначально с 0
    */
    this.speed = 0;
    this.maxSpeed = maxSpeed;
    this.running = false;
    this.distance = 0;
  };

  turnOn() {
    // Добавьте код для того чтобы завести автомобиль
    // Просто записывает в свойство running значание true
    this.running = true;
  };

  turnOff() {
    // Добавьте код для того чтобы заглушить автомобиль
    // Просто записывает в свойство running значание false
    this.running = false;
  }
  
  accelerate(spd) {
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed
    if (spd < this.maxSpeed) {
      this.speed = spd;
    };
  };
  
  decelerate(spd) {
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed и не меньше нуля
    if (0 < spd < this.maxSpeed) {
      this.speed = spd;
    };
  };

  drive(hours) {
    // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
    // но только в том случае если машина заведена!
    if (this.running === true) {
      this.distance = hours * this.speed;
    };
  };
};

let auto = new Car (250);

auto.turnOn();
console.log(auto.speed);
auto.accelerate(100);
console.log(auto.speed);
console.log(auto);

