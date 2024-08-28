import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

const App = () => {
    const [todos, setTodos] = useState([]);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(savedTodos);

        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.body.className = savedTheme;
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
    }, [theme]);

    const addTodo = (todo) => {
        setTodos([...todos, { ...todo, id: Date.now() }]);
    };

    const updateTodo = (id, updatedTodo) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? updatedTodo : todo
        );
        setTodos(updatedTodos);
    };

    const deleteTodo = (id) => {
        const filteredTodos = todos.filter((todo) => todo.id !== id);
        setTodos(filteredTodos);
    };

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className="app">
            <h1>Todo List</h1>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        </div>
    );
};

export default App;
