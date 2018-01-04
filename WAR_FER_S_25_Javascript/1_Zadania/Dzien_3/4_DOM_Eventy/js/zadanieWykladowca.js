document.addEventListener('DOMContentLoaded', function(e) {

console.log("Działam");

  var parent = document.querySelectorAll('.parent');


for (var i = 0; i < parent.length; i++) {

  parent[i].addEventListener('mouseenter', function(e) {
    console.log(this);
    this.querySelector('.children').style.display = "block";
  });
  parent[i].addEventListener('mouseleave', function(e) {
    console.log(this);
    this.querySelector('.children').style.display = "none";
  });

}
})
