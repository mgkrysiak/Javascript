var Robot = function(name) {
  this.name = name;
  this.isFunctional = true;
}

Robot.prototype.sayHi = function(toWho) {
  if(this.isFunctional === true){
    console.log("Robot " + this.name + " greets " + toWho);
  }
  else{
    console.log("Robot " + this.name + "is broken");
  }
};

Robot.prototype.changeName = function(newname) {
  console.log("Robot " + this.name + "changes name to " + newname);
  this.name = newname;
};

Robot.prototype.fixIt = function() {
  this.isFunctional = true;
  console.log("Robot " + this.name + "was fixed");
};

var N7 = new Robot("N7");

N7.sayHi("Marcinek");
N7.changeName("Wojtek");
N7.isFunctional = false;

N7.fixIt();
