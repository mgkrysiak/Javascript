/**
 * Created by Jacek on 2016-01-12.
 */
 document.addEventListener('DOMContentLoaded', function(e) {

  var listContainer = document.querySelectorAll('.listContainer');

  for (var i = 0; i < listContainer.length; i++) {
    listContainer[i].addEventListener('mouseenter', function (e) {

      for (var i = 0; i < this.firstElementChild.children.length - 1; i++) {
        this.firstElementChild.children[i].style.backgroundColor = "green";
      }
      this.firstElementChild.children[0].style.backgroundColor = "red";
      this.firstElementChild.children[this.firstElementChild.children.length - 1].style.backgroundColor = "blue";

});
}
 });

 //inne rozwiazanie

 // var listContainer = document.querySelectorAll('.listContainer');
 //
 // for (var i = 0; i < listContainer.length; i++) {
 //   listContainer[i].addEventListener('mouseenter', function (e) {
 //     this.firstElementChild.children[0].style.backgroundCor = "red"
 //     this.firstElementChild.children[1].style.backgroundCor = "green"
 //     this.firstElementChild.children[2].style.backgroundCor = "green"
 //     this.firstElementChild.children[3].style.backgroundCor = "green"
 //     this.firstElementChild.children[4].style.backgroundCor = "blue"
