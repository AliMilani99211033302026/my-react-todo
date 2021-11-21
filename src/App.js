import React,{useState} from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List'
function App() {
  const[inputText,setInputText] = useState('')
  const[todos,setTodos] = useState([])
  return (
   <>
   <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos}/>
   <List todos={todos} setTodos={setTodos}/>
   </>
  );
}

export default App;
