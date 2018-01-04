/**
 * Created by Jacek on 2016-01-12.
 */
 document.addEventListener('DOMContentLoaded', function(e) {

  var buttons = document.querySelectorAll('button');

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener ('click', function() { //dodajemy funkcje w momencie klikniecia

      var selector = "#" + this.id + " + p .counter";
      console.log(selector);

      var actual = document.querySelector(selector).innerText; // wyciagamy wartosc innertext by ja potem zmienic
      var toChange = parseInt(actual) + 1; // parseint zmienia stringa na liczbe

      document.querySelector(selector).innerText = toChange; // zamieniamy nowa wartosc z poprzednia
})
}
});
