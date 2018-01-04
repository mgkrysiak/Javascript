document.addEventListener('DOMContentLoaded', function(e) {

var article1 = document.querySelectorAll('article')[0];
var article2 = document.querySelectorAll('article')[1];

article1.addEventListener ('click', function (e) {
  this.querySelector('.content').style.display = 'block';

});
article2.addEventListener ('mousemove', function (e) {
  this.querySelector('.content').style.display = 'block';

});

});
