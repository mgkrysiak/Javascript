/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded', function (e) {

var form = document.querySelector('form');

form.addEventListener("submit", function(e){
  e.preventDefault();

  for (var i = 0; i < document.querySelectorAll('.page-header img').length; i++) {
    document.querySelectorAll('.page-header img')[i].style.display = "none";
  }

  var formControl = document.querySelector('.form-control').value;
  console.log(formControl);

  switch (formControl) {
    case 'Windows':
    document.querySelector('[alt="Windows"]').style.display = "block";
    break;
    case 'Os X':
    document.querySelector('[alt="Apple"]').style.display = "block";
    break;
    case 'Ubuntu':
    document.querySelector('[alt="Ubuntu"]').style.display = "block";
    break;

  }

})




})
