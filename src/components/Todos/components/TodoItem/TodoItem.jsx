import { DeleteOutline } from "@mui/icons-material";
import {
    Checkbox,
    IconButton,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import { observer } from "mobx-react-lite";
import React from "react";
import todoStore from "../../stores/todos.store";

const TodoItem = observer(({ todoId }) => {
    const todoItem = todoStore.getTodoItemById(todoId);

    return (
        <ListItem 
            key={todoId}
            secondaryAction={
                <IconButton
                    onClick={() => todoStore.removeTodo(todoItem.id)}
                    edge="end"
                    aria-label="comments"
                >
                    <DeleteOutline />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton
                onClick={() => todoStore.completeTodo(todoItem)}
            >
                <ListItemIcon>
                    <Checkbox
                        size="small"
                        edge="start"
                        checked={todoItem.completed}
                    />
                </ListItemIcon>
                <ListItemText id={todoId}>{todoItem.title}</ListItemText>
            </ListItemButton>
        </ListItem>
    );
});

export default TodoItem;
