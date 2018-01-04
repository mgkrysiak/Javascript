/**
 * Created by Jacek on 2016-01-12.
 */

 document.addEventListener('DOMContentLoaded', function(e) {

   var button = document.querySelector('.button');

   button.addEventListener ('click', function(e) {
     var list = document.querySelectorAll('.list li');

     for (var i = 0; i < list.length; i++) {
       list[i].parentElement.removeChild(list[i]);
     }
   })

 });
