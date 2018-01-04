//zad1

function getNumber(num, arr1) {
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] === num) {
      console.log(true);
    }
    else {
      console.log(false);
    }
  }
}

getNumber(8, [2,3,4,5,6]);

//zad2 !!
function createIdentityMatrix(rows, columns) {
  var tab = [];
  for (var i = 0; i < rows; i++) {
    var t = [];
    for (var b = 0; b < columns; b++) {
      t.push(0);
    }
    t[i] = 1;
    tab.push(t)
  }
  console.log(tab);
  return tab;
}

createIdentityMatrix(5,5);

//zad3
var Tree = function(argument) {
  this.type = argument;
}

Tree('brzoza');
