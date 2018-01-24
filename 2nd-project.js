var inp = document.getElementById('inp');
var list = document.getElementById('list');
var todos = JSON.parse(localStorage.getItem('todos')) || [];
render();
var indexForEdit;
function setValueForEdit(i){
    console.log(i);
    indexForEdit = i;
    inp.value = list.children[i].childNodes[0].textContent;
    console.log(list.children[i].childNodes[0]);
}
function doEdit(){
    todos[indexForEdit]= inp.value;
    localStorage.setItem('todos' , JSON.stringify(todos));
    render();
    indexForEdit = null;
    inp.value = '';
}
function add (){
    todos.push(inp.value);
    localStorage.setItem('todos' , JSON.stringify(todos));
    inp.value ='';
    render();
}

function render(){
    list.innerHTML ='';
    for (var i = 0; i < todos.length; i++){
        var li = document.createElement('li');
        li.innerHTML = todos[i] + '<button onclick="setValueForEdit('+ i +')">Edit</button> <button onclick="remove('+ i +')">Delete</button>';
        list.appendChild(li);
    }
}
function remove(i){
    todos.splice(i, 1);
    localStorage.setItem('todos' , JSON.stringify(todos));
    render();
}
