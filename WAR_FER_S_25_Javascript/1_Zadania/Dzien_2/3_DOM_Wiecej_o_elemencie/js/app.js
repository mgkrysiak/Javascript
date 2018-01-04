/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function(){
    /*
    Poniżej napisz kod rozwiązujący zadania
     */
//zad1 z wykladowca

     var lis = document.querySelectorAll(".ex5 ul li");

     for (var i = 0; i < lis.length; i++) {
       if(!lis[i].hasAttribute('data-direction'))
       {
         lis[i].setAttribute("data-direction", "up");
       }
       if(i % 2 != 0) {
         lis[i].style.backgroundColor = "green";
       }

       if(i % 3 == 0)
       {
         lis[i].querySelector('a').style.color = "orange";
       }
     }

     lis[4].classList.add('big');
     lis[4].className = "big";

//zad1
var ex1 = document.querySelector(".exercise.ex1");
     console.log(ex1);

     var chrome = ex1.querySelector("div");
     console.log(chrome);
     chrome.querySelector("a").innerText = "Chrome";
     chrome.querySelector(".chrome").style.width = "100px";

     var edge = ex1.querySelectorAll("div")[2];
     console.log(edge);
     edge.querySelector('.edge').style.backgroundImage = "url('assets/img/edge.png')";
     edge.querySelector('a').setAttribute("href", "https://www.microsoft.com/pl-pl/windows/microsoft-edge");

     var firefox = document.querySelector('.firefox');
     firefox.style.backgroundImage = "url('assets/img/firefox.png')";
     document.querySelector('.firefox + a').innerText = ("Firefox", "http://mozilla.org/pl");

     //zad2
     var name = document.querySelector('#name')
     name.innerText = "Gabi Krysiak"

     var favcolor = document.querySelector('#fav_color')
     favcolor.innerText = "czarny"

     var favmeal = document.querySelector('#fav_meal')
     favmeal.innerText = "lody o smaku zielonej herbaty"

     //zad3
     var ul = document.querySelector('.ex3 ul')
     ul.classList.add('menu')

     var list = document.querySelectorAll('.menu li');
     for (var i = 0; i < list.length; i++) {
       list[i].classList.add("menuElement")
       list[i].classList.remove("error");
     }

     //zad4
     var lista = document.querySelectorAll('.ex4 ul li');
     console.log(lista);

    for (var i = 0; i < lista.length; i++) {
      lista[i].setAttribute('data-id', i + 1);
    }





});
