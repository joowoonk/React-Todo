// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'

import Todo from './Todo'

import './Todo.css'

const TodoList = props => {
    console.log(props)
    return (
        <div className="todo-list">
            {props.toDoList.map(item => (
                <Todo 
                key={item.id} item={item} 
                toggleItem={props.toggleItem} 

                />
            ))}
            <button 
            className='clear-btn' 
            onClick={props.clearTodoList} 
            >
            Clear ToDo-List
            </button>
        </div>
    )
}
export default TodoList