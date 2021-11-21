import React from 'react'
import frmstyle from '../styles/TodoForm.module.css'
const Form = ({inputText,setInputText,todos,setTodos}) => {
    const inputHandler = e=>{
        setInputText(e.target.value)
    }
    const submitHandler = e=>{
        e.preventDefault()
        if(inputText.trim()){
            setTodos([...todos,{text:inputText,completed:false,ID:Math.pow(Math.random(),Math.random())}])
            setInputText('')
        }

    }
    return (
       <form className={frmstyle.todoForm} onSubmit={submitHandler}>
           <input type='text' placeholder='Add todo' onChange={inputHandler} value={inputText}/>
           <button type='submit'>Add</button>
       </form>
    )
}

export default Form
