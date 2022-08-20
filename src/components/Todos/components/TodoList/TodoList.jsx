import { observer } from "mobx-react-lite";
import React from "react";
import todoStore from "../../stores/todos.store";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = observer(() => {
    return (
        <div>
            {/* <button onClick={() => todoStore.fetchTodos()}>Get todos</button> */}
            {todoStore.todos.map((todoItem) => (
                <TodoItem key={todoItem.id} todoId={todoItem.id} />
            ))}
        </div>
    );
});

export default TodoList;
