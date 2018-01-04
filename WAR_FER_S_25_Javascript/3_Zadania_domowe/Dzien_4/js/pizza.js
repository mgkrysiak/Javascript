document.addEventListener('DOMContentLoaded', function(e) {

var checkbox = document.querySelectorAll('input');
var all = document.querySelector('.all');
var clear = document.querySelector('.clear')
var price = 0;
var sum = 0;


all.addEventListener('click', function(e) {
  for (var i=0; i< checkbox.length; i++) {
     if (checkbox[i].type=="checkbox") checkbox[i].checked = true; checkbox[6].checked = false;
  }
})

clear.addEventListener('click', function(e) {
  for (var i=0; i< checkbox.length; i++) {
     if (checkbox[i].type=="checkbox") checkbox[i].checked = false; checkbox[6].checked = true;
  }
  })

  checkbox.addEventListener('click', function(e) {
    for (var i = 0; i < checkbox.length; i++) {
      if (checkbox[i].checked = true) {
        price = this.dataset.price;
    console.log(price);
      }
    }
  })







});
