/**
 * Created by Jacek on 2016-01-12.
 */

 document.addEventListener('DOMContentLoaded', function(e) {


document.querySelector('#name').addEventListener('keyup', function(e) {

var name = this.value
var type = "";


if(name.charAt(0) === '4' && (name.length >= 13 && name.length <= 16) ) {
    type = "Visa";
  }

  else if(name.charAt(0) === '5' && name.length == 16) {
    type = "Mastercard";
  }

  else if(name.charAt(0) === '3' && (name.charAt(1) === '4' || name.charAt(1) === '7') && name.length == 15) {
    type = "American Express";
  }
  else {
  type="unknown";
}

document.getElementById('type').innerHTML =type;
});

});
