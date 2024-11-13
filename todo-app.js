const form = document.getElementById("form");
const input = document.getElementById("input");
const todoUL  = document.getElementById("todos");


const todos  = JSON.parse(localStorage.getItem("todos"));

if(todos){
    todos.forEach((todo) => {
        addTodo(todo);
    });
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    addTodo();
});

function addTodo(todo){
    let todoText = input.value;

    if(todo){
        todoText = todo.text;
    }

    if(todoText){
        const todo1 = document.createElement("li");
        if(todo && todo.completed){
            todo1.classList.add("completed");
        }

        todo1.innerText = todoText;

        todo1.addEventListener("click", ()=>{
            todo1.classList.toggle("completed");

            updateLS();
        });

        todo1.addEventListener("contextmenu", (e)=>{
            e.preventDefault();

            todo1.remove();

            updateLS();
        });

        todoUL.appendChild(todo1);

        input.Value = "";

        updateLS();
    }
}

function updateLS(){
    const todo1 = document.querySelectorAll("li");

    const todos = [];

    todo1.forEach((todo1) => {
        todos.push({
            text: todo1.innerText,
            completed: todo1.classList.contains("completed"),
        });
    });

    localStorage.setItem("todos", JSON.stringify(todos));
}