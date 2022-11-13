import InputTodo from "./components/InputTodo";
import Todos from "./components/Todos";
import React from "react";
import { useState } from "react";


const App = () => {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div className="center-align">
      <h3>Enter todo <br></br>
      <i className="medium material-icons">arrow_downward</i>
      </h3>
   
      <InputTodo addTodo={addTodo} />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
