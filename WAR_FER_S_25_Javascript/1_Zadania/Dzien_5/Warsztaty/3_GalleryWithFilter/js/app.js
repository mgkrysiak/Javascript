/**
 * Created by Jacek on 2015-12-16.
 */

 document.addEventListener("DOMContentLoaded", function(e) {
   var img = document.querySelectorAll('#gallery img');
   var showButton = document.querySelector('#showButton');
   var hideButton = document.querySelector('#hideButton');

   showButton.addEventListener('click', function(e) {
     var input = document.querySelector('#tagInput').value;

     if(input.length > 0)
     {
       for (var i = 0; i < img.length; i++) {
         var data = img[i].dataset.tag;
         data = data.split(','); //zamieniam strin na tablicę - przcinek jako separator
         console.log(data);

         if (data.indexOf(input)>-1) {
           img[i].classList.remove('invisible');
         } else {
           img[i].classList.add('invisible');
         }
       }
     }


   });
   hideButton.addEventListener('click', function(e) {
     var input = document.querySelector('#tagInput').value;

     if(input.length > 0)
     {
       for (var i = 0; i < img.length; i++) {
         var data = img[i].dataset.tag;
         data = data.split(','); //zamieniam strin na tablicę - przcinek jako separator
         console.log(data);

         if (data.indexOf(input)>-1) {
           img[i].classList.add('invisible');
         } else {
           img[i].classList.remove('invisible');
         }
       }
     }


   });
 });
