/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function(){
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */


//zad1 z wykladowca
function getDatasInfo(elements) {
  var tab = [];
  for (var i = 0; i < elements.length; i++) {
    tab.push(elements[i].dataset.color)
  }
  console.log(tab);
  return tab;
}

getDatasInfo(links);


//zad1
console.log(homeElement, childElements, banner, blocks, links);

for (var i = 0; i < childElements.length; i++) {
  console.log(childElements[i].tagName);
  console.log(childElements[i].className);
}
for (var i = 0; i < blocks.length; i++) {
  console.log(blocks[i].tagName);
  console.log(blocks[i].className);
}
for (var i = 0; i < links.length; i++) {
  console.log(links[i].tagName);
  console.log(links[i].className);
}

//zad2
for (var i = 0; i < blocks.length; i++) {
  console.log(blocks[i].innerHTML)
  console.log(blocks[i].outerHTML);
}

//zad3
var mainfooter = document.getElementById('mainFooter');

function getId(el) {
  console.log(el.id);
  return el.id
}
getId(mainfooter);

//zad4
function getTags(childElements) {
  tab = []
  for (var i = 0; i < childElements.length; i++) {
    tab.push(childElements[i].tagName);
    }
    console.log(tab);
    return tab
}
getTags(childElements)

//zad5
function getClassInfo(element) {
  console.log(element.classList);
}
getClassInfo(banner);

//zad6

var li = document.querySelectorAll('nav li:not([data-direction])');

function setDataDirection(elements) {

  for (var i = 0; i < elements.length; i++) {
  elements[i].setAttribute("data-direction", "top");
  }
}
setDataDirection(li)
});
