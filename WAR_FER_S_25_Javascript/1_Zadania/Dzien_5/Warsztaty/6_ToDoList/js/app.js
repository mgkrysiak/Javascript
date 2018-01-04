/**
 * Created by Jacek on 2015-12-16.
 */

 document.addEventListener("DOMContentLoaded", function(e) {
   var input = document.querySelector('#taskInput');
   var add = document.querySelector('#addTaskButton');
   var remove = document.querySelector('#removeFinishedTasksButton');
   var list = document.querySelector('#taskList');

   add.addEventListener('click', function (){
     var li = document.createElement('li');
     var h1 = document.createElement('h1');
     var del = document.createElement('button');
     var compl = document.createElement('button');
     var input = document.querySelector('#taskInput').value;

     h1.innerText = input;
     del.innerText = 'Delete';
     compl.innerText = 'Complete';

     li.appendChild(h1);
     li.appendChild(del);
     li.appendChild(compl);

     list.appendChild(li);

     compl.addEventListener('click', function(){
       this.parentElement.classList.toggle('complete');
     });
     del.addEventListener('click', function(){
       list.removeChild(li);
     });

});
   remove.addEventListener('click', function(){
     lis = list.querySelectorAll('li');
     for (var i = 0; i < lis.length; i++) {
       if (lis[i].className == "complete") {
         lis[i].parentElement.removeChild(lis[i]);
       }
     }
   });
 });
