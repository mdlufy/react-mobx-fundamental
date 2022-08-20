import { Button, Checkbox } from "@mui/material";
import { observer } from "mobx-react-lite";
import React from "react";
import todoStore from "../../stores/todos.store";

const TodoItem = observer(({ todoId }) => {
    const todoItem = todoStore.getTodoItemById(todoId);

    return (
        <div className="todo__item">
            <Checkbox
                checked={todoItem.completed}
                onChange={() => todoStore.completeTodo(todoItem)}
            />
            {todoItem.title}
            <Button
                variant="text"
                onClick={() => todoStore.removeTodo(todoItem.id)}
            >
                Удалить
            </Button>
        </div>
    );
});

export default TodoItem;
