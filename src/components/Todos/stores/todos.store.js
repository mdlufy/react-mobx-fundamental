import { makeAutoObservable } from "mobx";

class Todo {
    todos = [
        { id: 1, title: "Сходи в магазин", completed: false },
        { id: 2, title: "Посмотри видеоурок", completed: false },
        { id: 3, title: "Поставь лайк", completed: false },
    ];

    constructor() {
        makeAutoObservable(this);
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    removeTodo(id) {
        this.todos = this.todos.filter((todoItem) => todoItem.id !== id);
    }
 
    // in MobX:
    completeTodo(todoItem) {
       todoItem.completed = !todoItem.completed
    }
    
    getTodoItemById(todoId) {
        todoId = Number(todoId)

        return this.todos.find(todoItem => todoItem.id === todoId)
    }

    // in Redux:
    // completeTodo(id) {
    //     this.todos = this.todos.map((todoItem) =>
    //         todoItem.id === id
    //             ? { ...todoItem, completed: !todoItem.completed }
    //             : todoItem
    //     );
    // }

    fetchTodos() {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((json) => {
                this.todos = [...this.todos, ...json];
            });
    }
}

export default new Todo();
