import InputTodo from "./components/InputTodo";
import Todos from "./components/Todos";
import React from "react";

const App = () => {

  return (
    <div className="center-align">
      <h3>Enter todo <br></br><i className="medium material-icons">arrow_downward</i></h3>
      <InputTodo />
      <Todos />
    </div>
  );
}

export default App;