import React from 'react'
import Todo from './Todo'
import lststyle from '../styles/TodoList.module.css'
const List = ({todos,setTodos}) => {
    return (
            <ul className={lststyle.todoList}>
                {
                    todos.map(todo=>(
                        <Todo text={todo.text} key={todo.ID} todo={todo} setTodos={setTodos} todos={todos}/>
                    ))
                }
            </ul>
    )
}

export default List
