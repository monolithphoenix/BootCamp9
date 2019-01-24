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
  function ES (name, life, armor, color, x, y, amunition, torpeds, smokeAmunition) {
    // this = {}
    Ship.call(this, name, life, armor, color, x, y, amunition);
    this.torpeds = torpeds;
    this.smokeAmunition = smokeAmunition;
  }
  
  ES.prototype = Object.create(Ship.prototype);
  ES.prototype.constructor = ES;
  
  ES.prototype.launchTorpeds = function() {
    if(this.torpeds > 0) {
      this.torpeds--;
    }
  }
  
  ES.prototype.launchSmoke = function() {
    if(this.smokeAmunition > 0) {
      this.smokeAmunition--;
    }
  }
  
  
  let player1 = new ES('Bob', 5000, 500, 'red', 45, 12, 50, 30,5);