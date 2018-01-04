/**
 * Created by Jacek on 2016-01-12.
 */

document.addEventListener('DOMContentLoaded', function(e) {

  var button = document.querySelector('.button');

  button.addEventListener('click', function (e) {
    button.parentElement.removeChild(button)
  })

});
