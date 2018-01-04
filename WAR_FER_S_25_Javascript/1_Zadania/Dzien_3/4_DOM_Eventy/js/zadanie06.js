/**
 * Created by Jacek on 2016-01-12.
 */
 document.addEventListener('DOMContentLoaded', function(e) {

var maindiv = document.querySelector('.box');

maindiv.addEventListener ('mousemove', function (e) {
  console.log(e.offsetX);
  console.log(e.offsetY);

  var span1 = document.querySelector('#localX')
  span1.innerText = e.offsetX;
  var span2 = document.querySelector('#localY')
  span2.innerText = e.offsetY;
  var span3 = document.querySelector('#globalX')
  span3.innerText = e.pageX;
  var span4 = document.querySelector('#globalY')
  span4.innerText = e.pageY;
})
 });
