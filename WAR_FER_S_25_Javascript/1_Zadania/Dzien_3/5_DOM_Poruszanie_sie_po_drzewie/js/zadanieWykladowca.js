/**
 * Created by Jacek on 2016-01-12.
 */

 /**
  * Created by Jacek on 2016-01-12.
  */
 document.addEventListener('DOMContentLoaded', function(e) {


   var first = document.querySelector('.first')
         .firstElementChild
         .children[2];

   console.log(first);

   var second = document.querySelector("#second")
         .parentElement
         .children[3];

         console.log(second);

   var third = document.querySelector('[data-ex=third]')
           .parentElement
           .parentElement
           .lastElementChild
           .firstElementChild;

           var t = third.children[Math.floor(third.children.length / 2)];

           console.log(t);

 var forth = document.querySelector('.forth')
           .parentElement
           .querySelector('article')
           .querySelectorAll('p')[1];


           console.log(forth);

 });
