/**
 * Created by Jacek on 2015-12-16.
 */

 document.addEventListener('DOMContentLoaded', function(e) {

var nextPicture = document.querySelector('#nextPicture');
var prevPicture = document.querySelector('#prevPicture')

var currentImage = 0;

var slides = document.querySelectorAll('.slider li');

slides[currentImage].classList.add('visible');

nextPicture.addEventListener('click', function(e) {
slides[currentImage].classList.remove('visible');
currentImage++;
if (currentImage >= slides.length) {
  currentImage = 0
}
//currentImage = currentImage >= slides.length ? 0 : currentImage
slides[currentImage].classList.add('visible')
})

prevPicture.addEventListener('click', function(e) {
slides[currentImage].classList.remove('visible');
currentImage--;
if(currentImage < 0) {
  currentImage = slides.length - 1;
}
slides[currentImage].classList.add('visible');

})






});
