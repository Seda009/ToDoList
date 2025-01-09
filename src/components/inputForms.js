import React, { useCallback, useContext, useState } from "react";
import { ToDoContext } from "./todoProvider";

function InputForms() {
  const [inputValue, setInputValue] = useState("");

  const { toDo, setToDo, page, setPage } = useContext(ToDoContext);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  console.log(inputValue, "input");
  function addToDo() {
    // setToDo((prev) => [...prev, { toDoName: inputValue }]);
    const maxId = Math.max(...toDo.map((todo) => todo.id));
    const newTodo = { toDoName: inputValue, id: maxId + 1 };
    setToDo((prev) => [...prev, newTodo]);
    setInputValue("");
  }
  console.log(toDo);
  return (
    <div
      style={{
        marginBottom: "40px",
      }}
    >
      <input
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search note..."
        style={{
          padding: "7px",

          border: "1px solid #b18ac1",
          width: "320px",
          marginLeft: "20px",
        }}
      ></input>
      <button
        onClick={addToDo}
        style={{
          background: "#b18ac1",
          color: "white",
          border: "none",
          width: "100px",
          height: "30px",
        }}
      >
        Add
      </button>
      <button
        onClick={() => setPage(page + 1)}
        style={{
          marginLeft: "20px",

          color: "white",
          border: "none",
          padding: "7px",
          marginTop: "40px",
          background: " rgb(177, 138, 193) ",
        }}
      >
        Load more
      </button>
    </div>
  );
}

export default InputForms;
