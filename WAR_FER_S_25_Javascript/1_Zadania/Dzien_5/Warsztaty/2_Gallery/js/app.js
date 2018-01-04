/**
 * Created by Jacek on 2015-12-16.
 */

/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */
 document.addEventListener("DOMContentLoaded", function(e) {
 var gallery = document.querySelectorAll(".gallery li");
 var fullscreen = document.querySelector("body");

 console.log(gallery, fullscreen);

 for (var i = 0; i < gallery.length; i++) {
   gallery[i].querySelector("img").addEventListener("click", function(f) {
     var imgSrc = this.getAttribute("src");
     var fullImg = document.createElement("div");
     fullImg.classList.add("fullScreen");
     var newImg = document.createElement("img");
     var button = document.createElement("button")
     button.classList.add("close");
     button.innerText = "Close";

     fullscreen.appendChild(fullImg);
     fullImg.appendChild(newImg);
     fullImg.appendChild(button);

     newImg.setAttribute("src", imgSrc);

     button.addEventListener("click", function(e) {
       fullscreen.removeChild(fullImg);

     });


   });
 }


  });
