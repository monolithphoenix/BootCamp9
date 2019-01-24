// Module 06
/* Task 04
  Добавьте к классу Car из предыдущего задания статический
  метод getSpecs, который получает объект-машину как аргумент
  и выводит в консоль значения полей maxSpeed, running и distance.
  
  Использование будет выглядеть следующим образом:
  
  const someCar = new Car(100);
  someCar.turnOn();
  someCar.drive(2);
  
  Car.getSpecs(someCar); // maxSpeed: 100, running: true, distance: 200
*/
class Car {
  constructor(maxSpeed) {
    this.speed = 0;
    this.maxSpeed = maxSpeed;
    this.running = false;
    this.distance = 0;
  };

  getSpecs(arg) {
    console.log(arg.maxSpeed);
  };

  turnOn() {
    this.running = true;
  };

  turnOff() {
    this.running = false;
  };
  
  accelerate(spd) {
    if (spd < this.maxSpeed) {
      this.speed = spd;
    };
  };
  
  decelerate(spd) {
    if (0 < spd < this.maxSpeed) {
      this.speed = spd;
    };
  };

  drive(hours) {
    if (this.running === true) {
      this.distance = hours * this.speed;
    };
  };
};

const someCar = new Car(100);
  someCar.turnOn();
  someCar.drive(2);

  console.log(someCar.maxSpeed);
  console.log(someCar);
  console.log(Car.turnOn);
  
  Car.getSpecs(someCar); // maxSpeed: 100, running: true, distance: 200