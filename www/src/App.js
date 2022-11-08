import InputTodo from "./components/InputTodo";
import Todos from "./components/Todos";
import React, { useState } from "react";

const App = () => {

  const [todos, setTodos] = useState([])

  return (
    <>
      <InputTodo setTodos={setTodos}/>
      <Todos todos={todos}/>
    </>
  );
}

export default App;
