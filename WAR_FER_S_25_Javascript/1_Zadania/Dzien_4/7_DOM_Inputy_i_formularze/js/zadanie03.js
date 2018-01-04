/**
 * Created by Jacek on 2016-01-12.
 */

document.addEventListener('DOMContentLoaded', function(e) {

var form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  var team1 = document.querySelector('#team1');
  var team2 = document.querySelector('#team2');
  var points1 = document.querySelector('#points1');
  var points2 = document.querySelector('#points2');

  var errorMessage = document.querySelector('.error-message');
  var succesMessage = document.querySelector('.success-message');
  errorMessage.innerText = "";
  succesMessage.innerText = "";

  var isValid = true;

  if(team1.value === team2.value) {
    var p = document.createElement('p');
    p.innerText = "Drużyny muszą być różne";
    errorMessage.appendChild(p);
    var isValid = false;
  }

  if(points1.value < 0 || points2.value < 0 ) {
    var p = document.createElement('p');
    p.innerText = "Punkty nie mogą być ujemne";
    errorMessage.appendChild(p);
    var isValid = false;
  }

  if(isValid) {
    succesMessage.innerText = "Sukces!";
    setTimeout(function(){
    form.submit();}, 3000);
  }

})

});
