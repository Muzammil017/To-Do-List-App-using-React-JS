import React, { useState } from 'react';
import styled from 'styled-components';

const TodoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.itemBackground};
  color: ${({ theme }) => theme.text};
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const TodoInput = styled.input`
  flex: 1;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-right: 10px;
`;

const TodoButton = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.buttonBackground};
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.buttonHover};
  }
`;

const Todo = ({ todo, toggleComplete, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(todo.task);

  const handleUpdate = () => {
    updateTodo(todo.id, newTask);
    setIsEditing(false);
  };

  return (
    <TodoContainer>
      {isEditing ? (
        <>
          <TodoInput
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <TodoButton onClick={handleUpdate}>Update</TodoButton>
          <TodoButton onClick={() => setIsEditing(false)}>Cancel</TodoButton>
        </>
      ) : (
        <>
          <span
            onClick={() => toggleComplete(todo.id)}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer',
              flex: 1,
            }}
          >
            {todo.task}
          </span>
          <TodoButton onClick={() => setIsEditing(true)}>Edit</TodoButton>
          <TodoButton onClick={() => deleteTodo(todo.id)}>Delete</TodoButton>
        </>
      )}
    </TodoContainer>
  );
};

export default Todo;
