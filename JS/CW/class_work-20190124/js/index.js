function Ship(name, life, armor, color, x, y, amunition) {
    this.speed = 0;
    this.name = name;
    this.life = life;
    this.armor = armor;
    this.color = color;
    this.x = x;
    this.y = y;
    this.amunition = amunition;
  }
  
  Ship.prototype.move = function (a, b) {
    if (this.speed > 0) {
      this.x = a;
      this.y = b;
    }
  }
  
  Ship.prototype.acselerate = function (speed) {
    this.speed = speed;
  }
  
  Ship.prototype.stop = function () {
    this.speed = 0;
  }
  
  Ship.prototype.fire = function () {
    if (this.amunition > 0) {
      this.amunition--;
    }
  }

// Добавим надстроку уникальных свойств ES к основе Ship
            // function ES (name, life, armor, color, x, y, amunition, torpeds, smokeAmunition) {
            //     // this = {}
            //     Ship.call(this, name, life, armor, color, x, y, amunition);
            //     this.torpeds = torpeds;
            //     this.smokeAmunition = smokeAmunition;
            // };
            
            // ES.prototype = Object.create(Ship.prototype);
            // ES.prototype.constructor = ES;
            
            // ES.prototype.launchTorpeds = function() {
            //     if(this.torpeds > 0) {
            //     this.torpeds--;
            //     };
            // };
            
            // ES.prototype.launchSmoke = function() {
            //     if(this.smokeAmunition > 0) {
            //     this.smokeAmunition--;
            //     };
            // };

// Тоже самое, что сверху, только написано через class! Красиво, правда?)
    class ES extends Ship {
        constructor(name, life, armor, color, x, y, amunition,torpeds,smokeAmunition) {
        super(name, life, armor, color, x, y, amunition)
        this.torpeds = torpeds;
        this.smokeAmunition = smokeAmunition;
        }
        launchTorpeds() {
            if(this.torpeds > 0) {
            this.torpeds--;
            }
        }
        launchSmoke() {
            if(this.smokeAmunition > 0) {
            this.smokeAmunition--;
            }
        }
    }



// AV section --->
            // function AV (name, life, armor, color, x, y, amunition, plane) {
            //     Ship.call(this, name, life, armor, color, x, y, amunition);
            //     this.planes = plane;
            // };
            // AV.prototype = Object.create(Ship.prototype); // Create new object (AV.prototype) in Ship.prototype
            // AV.prototype.constructor = AV;
            // AV.prototype.launchPlane = function () {
            //     if(this.planes > 0) {
            //         this.planes--;
            //     };
            // };

    class AV extends Ship {
        constructor (name, life, armor, color, x, y, amunition, plane) {
            super (name, life, armor, color, x, y, amunition);
            this.planes = plane;
        }
        launchPlane() {
            if (this.planes > 0) {
                this.planes--;
            };
        };
    };

// CR section --->
            // function CR (name, life, armor, color, x, y, amunition, pvo) {
            //     Ship.call(this, name, life, armor, color, x, y, amunition);
            //     this.pvo = pvo;
            // };
            // CR.prototype = Object.create(Ship.prototype); // Create new object (CR.prototype) in Ship.prototype
            // CR.prototype.constructor = CR;
            // CR.prototype.launchPVO = function () {
            //     if(this.pvo > 0) {
            //         this.pvo--;
            //     };
            // };

    class CR extends Ship {
        constructor (name, life, armor, color, x, y, amunition, pvo) {
            super (name, life, armor, color, x, y, amunition);
            this.pvo = pvo;
        };
        launchPVO() {
            if (this.pvo > 0) {
                this.pvo--;
            };
        };
    };

// console.log(AV.prototype);
// console.log(Ship);

  
  let player1 = new ES('Bob', 5000, 500, 'red', 45, 12, 50, 30, 5);
  let player2 = new AV('Lu', 8000, 400, 'green', 45, 12, 50, 40);
  let player3 = new CR('Martin', 3000, 300, 'blue', 45, 12, 50, 50);

  console.log(player1);
  console.log(player2);
  console.log(player3);

  console.log(player2.planes);
  player2.launchPlane();
  console.log(player2.planes);
