import React, { useState } from 'react';

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [input, setInput] = useState(todo.text);

    const handleUpdate = () => {
        if (input.trim()) {
            updateTodo(todo.id, { ...todo, text: input });
            setIsEditing(false);
        }
    };

    return (
        <div className="todo-item">
            {isEditing ? (
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onBlur={handleUpdate}
                    autoFocus
                />
            ) : (
                <span>{todo.text}</span>
            )}
            <div>
                <button className="edit-button" onClick={() => setIsEditing(true)}>
                    Update
                </button>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
        </div>
    );
};

export default TodoItem;
