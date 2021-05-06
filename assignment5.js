function appendToList(){
    alert("Item added to list.");
    const list = document.querySelector('ul');
    const newTodo = document.createElement('li');
    newTodo.textContent = document.getElementById("list").value;
    list.appendChild(newTodo);
}