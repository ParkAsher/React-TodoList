import { MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md'
import './TodoListItem.scss';
import React from 'react'

function TodoListItem() {
    return (
        <div className='TodoListItem'>
            <div className='checkbox'>
                <MdCheckBoxOutlineBlank></MdCheckBoxOutlineBlank>
                <div className='text'>할일</div>
            </div>
            <div className='remove'>
                <MdRemoveCircleOutline></MdRemoveCircleOutline>
            </div>
        </div>
    )
}

export default TodoListItem