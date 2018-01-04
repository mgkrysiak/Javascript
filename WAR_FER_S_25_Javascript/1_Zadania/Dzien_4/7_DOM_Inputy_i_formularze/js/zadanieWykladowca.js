/**
 * Created by Jacek on 2016-01-12.
 */

 document.addEventListener('DOMContentLoaded', function(e) {

   var form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault(); //zapobiega wyslaniu formularza automatycznie

  var email = document.querySelector('#email').value;
  var name = document.querySelector('#name').value;
  var surname = document.querySelector('#surname').value;
  var pass1 = document.querySelector('#pass1').value;
  var pass2 = document.querySelector('#pass2').value;
  var agree = document.querySelector('#agree').checked; //sprawdza czy checkbox jest zaznaczony

//pobieranie referencji do informacji o sukcesie albo bledach
  var errorMessage = document.querySelector('.error-message');
  var succesMessage = document.querySelector('.success-message');
  errorMessage.innerText = "";
  succesMessage.innerText = "";

var isValid = true;

if(email.indexOf("@") === -1) {
  var p = document.createElement('p');
  p.innerText = "Email musi posiadać znak @";
  errorMessage.appendChild(p);
  var isValid = false;
}

if(name.length < 6) {
  var p = document.createElement('p');
  p.innerText = "Twoje imię jest za krótkie";
  errorMessage.appendChild(p);
  var isValid = false;
}
if(surname.length < 6) {
  var p = document.createElement('p');
  p.innerText = "Twoje naziwsko jest za krótkie";
  errorMessage.appendChild(p);
  var isValid = false;
}
if(pass1 !==pass2 || pass1.length < 3) {
  var p = document.createElement('p');
  p.innerText = "Hasła nie są takie same lub puste";
  errorMessage.appendChild(p);
  var isValid = false;
}
if(!agree) {
  var p = document.createElement('p');
  p.innerText = "Musisz zaakceptować warunki";
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
