/**
 * Created by Jacek on 2016-01-12.
 */

  document.addEventListener('DOMContentLoaded', function(e) {
    // body...

   var del = document.querySelectorAll('.deleteBtn');

   for (var i = 0; i < del.length; i++) {
     del[i].addEventListener("click", function(){

       document.querySelector('tbody').removeChild(this.parentElement.parentElement);

       //del.remove();



     })
   }

});
