/**
 * Created by Jacek on 2015-12-16.
 */

 document.addEventListener('DOMContentLoaded', function(e){

var li = document.querySelectorAll('.nav li')

for (var i = 0; i < li.length; i++) {
 li[i].addEventListener('mouseenter', function (e){

 if (this.firstElementChild){
   this.firstElementChild.style.display = 'block'
 }



 })
 li[i].addEventListener('mouseleave', function (e){

 if (this.firstElementChild){
   this.firstElementChild.style.display = 'none'
 }



 })
}






 })
