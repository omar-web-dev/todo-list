
const inputTodo = (valueId) => {
    let userInput = []
    const inputElement = document.getElementById(valueId)
    const inputValue = inputElement.value;
    return inputValue
}

document.getElementById('todo-set').addEventListener('click', function(){
    let todo = getDataLocalStor()
    const inputFlied = inputTodo('todo-flied');
    console.log(todo);
    todo.todo
    if (!todo) {
        console.log('Kodar kosom kicco nai');
        localStorage.setItem("todo", inputFlied);
    } else {
        console.log('are kicho ache');
    }
    // const getTodo =  localStorage.getItem('todo');

    // if (getTodo) {
    //     const appent = document.getElementById('appant')
    //     const createTodoList = document.createElement('div')
    //     createTodoList.innerHTML = `
    //     
    //     appent.appendChild(createTodoList)
    // } else {
    //     console.log('no');
    // }
    // document.getElementById('todo-flied').value = ''
})



const getDataLocalStor = () => {
    const todo = localStorage.getItem('todo')
    const parseTodo = JSON.parse(todo)
    return parseTodo
}



const deleteItem = (id) => {
    const todoList = document.getElementById('todo-list')
    localStorage.removeItem("todo");
    todoList.innerText =  '';
}
