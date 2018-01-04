//zad1

var menu = document.querySelector('#menu');

console.log(menu);

var li = document.querySelector('#menu').children;

function getDataInfo(menu) {
   tab = [];
  for (var i = 0; i < menu.length; i++) {
    tab.push(menu[i].dataset.info)
  }
  console.log(tab);
  return tab;
}

getDataInfo(li);

//zad2
var contener = document.getElementById('main-contener');

console.log(contener);


function getElementClass(elements) {
  tab = [];
  for (var i = 0; i < elements.length; i++) {
    tab.push(elements.className)
  }
console.log(tab);
}

getElementClass(contener);

//zad3
var pink = document.querySelector('.pink-color')

console.log(pink);

function getElementText(element) {
  console.log(element.innerText)
}
getElementText(pink)

//zad4
var images = document.querySelectorAll('.images')

console.log(images);

function getElementAlt(element) {
  tab = [];
  for (var i = 0; i < element.length; i++) {
    tab.push(element[i].alt);
  }
  console.log(tab);
}
getElementAlt(images)

//zad5
var mylink = document.querySelectorAll('.my-link')

console.log(mylink);

function getElementHref(element) {
  tab = []
  for (var i = 0; i < element.length; i++) {
    tab.push(element[i].href)
  }
  console.log(tab);
}
getElementHref(mylink)
