import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { observer } from "mobx-react-lite";
import React from "react";
import todoStore from "../../stores/todos.store";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = observer(() => {
    return (
        <Box sx={{ display: 'flex', width: "100%", maxWidth: 360, bgcolor: "ghostwhite", border: '2px solid green',  alignItems: 'center' }}>
                <List sx={{display: 'flex', flexGrow: 1, flexDirection: 'column'}}>
                    <Button onClick={() => todoStore.fetchTodos()}>
                        Get todos
                    </Button>
                    {todoStore.todos.map((todoItem) => (
                        <TodoItem key={todoItem.id} todoId={todoItem.id} />
                    ))}
                </List>
        </Box>
    );
});

export default TodoList;
