import './TodoInsert.scss'
import React from 'react'
import { MdAdd } from 'react-icons/md'

function TodoInsert() {
    return (
        <form className='TodoInsert'>
            <input placeholder='할 일을 입력하세요.'></input>
            <button type='submit'>
                <MdAdd></MdAdd>
            </button>
        </form>
    )
}

export default TodoInsert