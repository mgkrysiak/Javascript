/**
 * Created by Jacek on 2016-01-12.
 */

 document.addEventListener('DOMContentLoaded', function(e) {

var divs = document.querySelectorAll('.box')

for (var i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', function () {
    var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor  = randomColor;

  })
}
});
