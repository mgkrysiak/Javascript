/**
 * Created by Jacek on 2016-01-12.
 */

   document.addEventListener('DOMContentLoaded', function(e) {


   var button = document.querySelector(".button");

   button.addEventListener("click", function(e) {

     var a = document.querySelector("#orderId").value;
     var b = document.querySelector("#item").value;
     var c = document.querySelector("#quantity").value;
     var table = document.querySelector("table");
     var tr = table.querySelector("tr").cloneNode(true);

     tr.firstElementChild.innerText = a;
     tr.children[1].innerText = b;
     tr.children[2].innerText = c;

     table.appendChild(tr);

   })
