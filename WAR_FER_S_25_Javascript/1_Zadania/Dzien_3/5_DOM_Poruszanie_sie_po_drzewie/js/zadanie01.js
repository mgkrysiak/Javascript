/**
 * Created by Jacek on 2016-01-12.
 */
 document.addEventListener('DOMContentLoaded', function(e) {


var buttons = document.querySelectorAll('.button');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function(e) {
  this.nextElementSibling.classList.toggle("hidden");

});
}


 });
