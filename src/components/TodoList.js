import React from 'react'

/* components */
import TodoListItem from './TodoListItem'

import './TodoList.scss';


function TodoList() {
    return (
        <div className='TodoList'>
            <TodoListItem></TodoListItem>
            <TodoListItem></TodoListItem>
            <TodoListItem></TodoListItem>
        </div>
    )
}

export default TodoList