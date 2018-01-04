/**
 * Created by Jacek on 2015-12-16.
 */


/*
 <span class="tooltipText">Text tooltipa</span>
 */

 document.addEventListener("DOMContentLoaded", function(e) {

var toolTip = document.querySelectorAll(".tooltip");
console.log(toolTip);

for (var i = 0; i < toolTip.length; i++) {
  toolTip[i].addEventListener("mouseenter", function(e) {
      var box = document.createElement("span");
      box.classList.add("tooltipText");
      box.innerText = this.dataset.text;
      this.appendChild(box);

  });
  toolTip[i].addEventListener("mouseleave", function(e) {
      this.removeChild(this.lastElementChild);

  });
}

});
