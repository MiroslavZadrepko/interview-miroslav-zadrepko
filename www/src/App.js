import InputTodo from "./components/InputTodo";
import Todos from "./components/Todos";
import React from "react";
import { useState } from "react";

const App = () => {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  console.log(todos)

  return (
    <>
      <InputTodo addTodo={addTodo} />
      <Todos todos={todos}/>    
    </>
  );
}

export default App;
