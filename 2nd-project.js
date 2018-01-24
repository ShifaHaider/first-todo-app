var inp = document.getElementById('inp');
var list = document.getElementById('list');
var todos = [];
function add (){
    todos.push(inp.value);
    inp.value ='';
    render();
}
function toEdit(i){
    inp.value = todos[i].children[0].childNodes[0].textContent;
    render();
}
function render(){
    list.innerHTML ='';
    for (var i = 0; i < todos.length; i++){
        var li = document.createElement('li');
        li.innerHTML = todos[i] + '<button onclick="edit('+ i +')">Edit</button> <button onclick="remove('+ i +')">Delete</button>';
        list.appendChild(li);
    }
}
function remove(i){
    todos.splice(i, 1);
    render();
}
function edit(i){
     render();
     todos.push(inp.value = todos[i]);
}















//function secEdit(i){
//    render();
//    edit(i);
//    todos[i].innerHTML = inp.value;
//}



