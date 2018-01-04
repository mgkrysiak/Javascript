//zad2
function getHighest() {
  var highest = arguments[0];

  for (var i = 1; i < arguments.length; i++) {
    if(arguments[i] > highest) {
      highest = arguments[i];
    }
  }
  return highest;
}

console.log(getHighest (3,4,53,3));

//zad3
function countHello(num) {
  var counter = 0;

  var int = setInterval(function() {
    console.log("czesc" + counter);
    counter++;

    if(counter >= num) {
      clearInterval(int);
    }
  }, 1000);
}
countHello(10);

//zad4
cokolwiek();

function cokolwiek()
{
  console.log("Ok działam");
}

console.log(ok); //undefined

var ok = "Jest ok";

saySomething();

var saySomething = function(){
  console.log("Mówię coś");
}
