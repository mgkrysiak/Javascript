/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function() {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */

});

var title = document.querySelector(".title");

function getDataAnimation(element) {
  console.log(element.dataset.animation);
}

getDataAnimation(title);

//zad1
var home1 = document.querySelector('#home');
var home2 = document.getElementById('home');

console.log(home1, home2);

var li = document.querySelector('li:not([data-direction])')

console.log(li);

var block = document.querySelector('.block');

console.log(block);

//zad2
var nav = document.querySelectorAll('nav li')
console.log(nav);

var p = document.querySelectorAll('div p')
console.log(p);

var div = document.querySelectorAll('article div')
console.log(div);

//zad3
var article = document.querySelector('article.first')
console.log(article);

var ele = article.querySelectorAll('.oferts');

for (var i = 0; i < ele.length; i++) {
  console.log(ele[i].tagName);
}

var divs = article.querySelectorAll('article div')
console.log(divs);
