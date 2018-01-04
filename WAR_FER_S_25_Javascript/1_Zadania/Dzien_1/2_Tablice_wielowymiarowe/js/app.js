


var task2Array = [
                  [1, 2, 3, 4],
                  [5, 6, 7, 8],
                  [9, 10, 11, 12]
            ];

            var arr = [
            [11, 12],
            [42, 2],
            [-4, -120],
            [0, 0],
            [1, 34],
            ];

function checkArray(arr) {
var newArr = [];

for (var i = 0; i < arr.length; i++) {
var trueorfalse = true;
for (var j = 0; j < arr[i].length; j++) {
if(arr[i][j] % 2 != 0)
{
trueorfalse = false;
}
}
  newArr.push(trueorfalse);

}
console.log(newArr);
return newArr;
}

checkArray(arr);

//zad1

var task1Array = [
  [2, 3],
  ["Ala", "Ola"],
  [true, false],
  [5, 6, 7, 8],
  [12, 15, 67]
]

console.log (task1Array[3][2]);
console.log(task1Array[1].length);
console.log(task1Array[4][2])

//zad2
var task2Array = [
                  [1, 2, 3, 4],
                  [5, 6, 7, 8],
                  [9, 10, 11, 12]
            ];

for (var i = 0; i < task2Array.length; i++) {
  console.log(task2Array[i]);
}

for (var i = 0; i < task2Array.length; i++) {
  console.log(task2Array[i].length);
}

for (var i = 0; i < task2Array.length; i++) {
  for (var c=0; c < task2Array[i].length; c++) {
    console.log(task2Array[i][c]);
  }
}

//zad3
var tab1 = [
  [2, 3, 4]
  [5, 6, 7, 8]
]
function print2DArray(tab1) {

    for (var i = 0; i < tab1.length; i++) {
     for (var e=0; e < tab1[i].length; e++) {
       console.log(tab1[i][e]);
     }
    }
}
print2DArray([
  [2, 3, 4],
  [5, 6, 7, 8]
]);

//zad5
function create2DArray(row, col) {
  var tab = [];
  var cntr = 0;
  for (var i = 0; i < row; i++) {
    var t = [];
    for (var h = 0; h < col; h++) {
      cntr++;
      t.push(cntr);
    }
    tab.push(t)
  }
  console.table(tab)
  return tab;
}

create2DArray(3,5);
