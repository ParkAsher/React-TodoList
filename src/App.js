import './App.css';

/* components */
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useCallback, useEffect, useRef, useState } from 'react';

function App() {

    const [todos, setTodos] = useState([]);

    const nextId = useRef(0);

    const onInsert = useCallback(text => {

        const todo = {
            id: nextId.current,
            text,
            checked: false,
        };

        setTodos(todos => todos.concat(todo))
        nextId.current += 1;

    }, [])

    const onRemove = useCallback(id => {

        setTodos(todos => todos.filter(todo => todo.id !== id))

    }, [])

    const onToggle = useCallback(id => {

        setTodos(todos => todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo))

    }, [])

    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert}></TodoInsert>
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}></TodoList>
        </TodoTemplate>
    );
}

export default App;
