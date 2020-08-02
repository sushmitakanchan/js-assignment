#todolist.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo list</title>
</head>
<body>
    <h2>Todo List</h2>
    <form action="" id="myform">
        <input type="text" id="candidate">
        <button  type ="button" id="add">Add Item </button>
        <button  type="button" id="remove">Remove Item </button>
    </form>
    <ol id="list">

    </ol>
    <script src="scripts/todo.js">

    </script>
</body>
</html>


#todo.js

const btn1 = document.querySelector('#add');
const btn2 = document.querySelector('#remove');
const ol = document.getElementById("list");
    
btn1.onclick = function addItem() {
        var ol = document.getElementById("list");
        var candidate = document.getElementById("candidate");
        var li = document.createElement("li");
        li.setAttribute('id', candidate.value);
        li.appendChild(document.createTextNode(candidate.value));
        ol.appendChild(li);
    }
    
    
btn2.onclick = function removeItem() {
        var ol = document.getElementById("list");
        var candidate = document.getElementById("candidate");
        var item = document.getElementById(candidate.value);
        ol.removeChild(item);
    }
    
localStorage.setItem('myData', ol);
var data = localStorage.getItem('myData');
console.log(data);
