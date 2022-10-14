import React, { useEffect } from 'react'

/* components */
import TodoListItem from './TodoListItem.js'

import './TodoList.scss';

function TodoList({ todos, onRemove, onToggle }) {

    useEffect(() => {
        console.log(todos)
    }, [todos])

    return (
        <div className='TodoList'>
            {
                todos.map(todo => (
                    <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
                ))
            }
        </div>
    )
}

export default TodoList