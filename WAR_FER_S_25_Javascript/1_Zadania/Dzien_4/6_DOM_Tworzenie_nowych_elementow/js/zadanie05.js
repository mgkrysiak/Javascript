/**
 * Created by Jacek on 2016-01-12.
 */
 document.addEventListener('DOMContentLoaded', function(e) {


   var btn = document.querySelectorAll('.moveBtn');

   for (var i = 0; i < btn.length; i++) {
     btn[i].addEventListener("click", function(){

       if(this.parentElement.parentElement.id == "list1") {
         console.log("Kliknąłem listę 1");

         document.querySelector('#list2').appendChild(this.parentElement);

       } else {
         console.log("Kliknąłem listę 2");

         document.querySelector('#list1').appendChild(this.parentElement);

       }


     });
   }


 });
