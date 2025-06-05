const input = document.getElementById("todoInp")
const list = document.getElementById("todoList")

function loadTodo(){
    const todos = JSON.parse(localStorage.getItem("todos"))||[]
    list.innerHTML=""
    todos.forEach((todo, i)=>{
        const li = document.createElement("li")
        li.innerHTML = `
        <span style="text-decoration:${todo.done?'line-through':'none'}">
            ${todo.text}
        </span>
        <button onclick="toggleDone(${i})">Done</button>
        <button onclick="deleteTodo(${i})">Delete</button>
        `
        list.appendChild(li)
    })
}

function addTodo(){
    const text=input.value.trim()
    if(!text) return
    const todos = JSON.parse(localStorage.getItem("todos"))||[]
    todos.push({text, done:false})
    localStorage.setItem("todos", JSON.stringify(todos))
    input.value=""
    loadTodo()
}

function deleteTodo(index){
    const todos=JSON.parse(localStorage.getItem("todos"))||[]
    todos.splice(index, 1)
    localStorage.setItem("todos", JSON.stringify(todos))
    loadTodo()
}

function toggleDone(index){
    const todos = JSON.parse(localStorage.getItem("todos"))||[]
    todos[index].done=!todos[index].done
    localStorage.setItem("todos", JSON.stringify(todos))
    loadTodo()
}

loadTodo()