function distFromAvarage(arr) {

    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }

    var average = sum / arr.length;

    var tab = [];

    for (var i = 0; i < arr.length; i++) {
      tab.push(Math.abs(arr[i] - average));
    }
    console.log(arr);
    console.log(average);
    return tab;

  }

  console.log(distFromAvarage([2,3,4,5,6,7,8,9,10]));

  //zad2

  var fruits = ["banan", "malina", "borowka"]
  var fruits = ["banan", "malina", "borowka"]


  console.log(fruits[0]);

  console.log(fruits[fruits.length - 1]);

  for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);

  }

//zad2

  function createArray(number) {
      var newArray = [];

      for(var counter = 1; counter <= number; counter++) {
          newArray.push(counter);
      }

      return newArray;
  }

  console.log("tablica z liczbami do 6 = " + createArray(6));
  console.log("tablica z liczbami do 1 = " + createArray(1));
  console.log("Test dla liczby ujemnej (powinna być pusta tablica) " + createArray(-6));
  console.log("Test dla zera (powinna być pusta tablica) " + createArray(0));

  //zad3
  function printTable(array) {
  //  array = [1,2,3,4,5];

    for (var i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
    return array;
  }

  printTable([1,2,3,4,5]);

  //zad4
  function multiply(arr) {

    var multi = 1;

    for (var i = 0; i < arr.length; i++) {
      multi = multi * arr[i]; //multi *= arr[i]
    }
console.log(multi);
    return multi;
  }
  console.log(multiply([4,5,6,7]))

  //zad5
  var tabPar = []
  function getEvenAvarage(tab) {
    var evenSum = 0;
    var evenCount = 0;

    for (var i = 0; i < tab.length; i++) {
      if (tab[i]%2 == 0) {
        evenSum += tab[i];
        evenCount ++;
        }
    }
    if (evenCount === 0) {
      return null;
    }
    var average = evenSum/evenCount;
    return average;
  }

console.log(getEvenAvarage([1,2,3,4,5,6]))

//
function getEvenAvarage2(arr) {
  {
  var evens = [];

  for (var i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0) {
      evens.push(arr[i]);
    }
  }
var sum = 0;
for (var i = 0; i < evens.length; i++) {
  sum += evens[i];
}
return sum / evens.length;
}
console.log(getEvenAvarage2([3,4,5,6,7,8,]));

}

//zad6
function sortArray() {
var tab = [4,1,5,6,7,8,11,2,2,3,4,4,55,6];

tab.sort(function(a,b) {
  return b - a;
})
console.log(tab);
};



//zad7

function addArrays(tab1, tab2)
{

  var lngt = tab1.length > tab2.length ? tab1.length : tab2.length;


  var sumedArray = [];

  for (var i = 0; i < lngt; i++) {
    if(tab1[i] === undefined)
    {
      sumedArray.push(tab2[i]);

    } else if(tab2[i] === undefined) {
      sumedArray.push(tab1[i]);
    } else {
      sumedArray.push(tab1[i] + tab2[i])
    }

    var r = tab1[i] && tab2[i] ? tab1[i] + tab2[i] : (tab1[i] === undefined ? tab2[i] : tab1[i]);
    sumedArray.push(r);
  }
  console.log(sumedArray);
  return sumedArray;


}
addArrays([4,0,1,3,4], [1,9,6,7,8,17]);
addArrays([2,3,1,5,3,5], [3,1,76,1]);

//
//Niekompletne
function addArrays(tab1, tab2)
{

  var lngt = tab1.length > tab2.length ? tab1.length : tab2.length;


  var sumedArray = [];

  for (var i = 0; i < lngt; i++) {
    //trzeba dopisac obsługę 0
    var r = tab1[i] && tab2[i] ? tab1[i] + tab2[i] : (tab1[i] === undefined ? tab2[i] : tab1[i])
    sumedArray.push(r);
  }
  console.log(sumedArray);
  return sumedArray;


}
addArrays([4,4,1,3,4], [1,9,6,7,8,17]);
addArrays([2,3,1,5,3,5], [3,1,76,1]);
