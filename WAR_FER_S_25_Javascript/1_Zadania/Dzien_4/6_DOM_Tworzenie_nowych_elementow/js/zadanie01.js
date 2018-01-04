/**
 * Created by Jacek on 2016-01-12.
 */


   document.addEventListener('DOMContentLoaded', function(e) {

  var button = document.querySelector('.button');
  var menu = document.querySelector('.menu');
  var counter = 0;

  button.addEventListener('click', function (e) {
    var li = document.createElement("li")
    counter++;
    li.innerText = counter;

    menu.appendChild(li);




  });

 });
