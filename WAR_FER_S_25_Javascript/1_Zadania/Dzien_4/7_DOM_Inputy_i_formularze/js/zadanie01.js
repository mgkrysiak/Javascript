/**
 * Created by Jacek on 2016-01-12.
 */

document.addEventListener('DOMContentLoaded', function(e) {

var checkbox = document.querySelector('#invoice');
var div = document.querySelector('#invoiceData')

div.style.display = 'none'

checkbox.addEventListener('change', function (e) {

  if(this.checked) {
    div.style.display = 'block';
  }
})

});
