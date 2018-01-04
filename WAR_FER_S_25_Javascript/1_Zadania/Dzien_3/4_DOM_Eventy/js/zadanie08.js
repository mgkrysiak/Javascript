/**
 * Created by Jacek on 2016-01-12.
 */
 
   document.addEventListener("DOMContentLoaded", function(e) {
     var globalw = window.innerWidth;
     var globalh = window.innerHeight;
     document.querySelector("span").innerText = globalh;
     document.querySelector("span:nth-child(2)").innerText = globalw;

  window.addEventListener("resize", function(e) {
    var globalw = window.innerWidth;
    var globalh = window.innerHeight;
    document.querySelector("span").innerText = globalh;
    document.querySelector("span:nth-child(2)").innerText = globalw;

 });
