import React from "react";
import tdstlye from "../styles/tOdo.module.css";
const Todo = ({ text , todo , setTodos ,todos}) => {
  const deleteHandler = ()=>{
        setTodos(todos.filter(el=>el.ID !== todo.ID))
  }
  const completeHandler = ()=>{
    setTodos(todos.map(el=>{
      if(el.ID === todo.ID){
        return{
          ...el,completed:!el.completed
        }
      }else{
        return el
      }
    }))
  }
  return (
    <div className={tdstlye.td} style={todo.completed?{transition:'background-color .5s ease',backgroundColor:'green'}:{transition:'background-color .5s ease',backgroundColor:'royalblue'}}>
      <li>{text}</li>
      <div className={tdstlye.btnWrapper}>
        <button onClick={deleteHandler}>remove</button>
        <button onClick={completeHandler}>complete</button>
      </div>
    </div>
  );
};

export default Todo;
