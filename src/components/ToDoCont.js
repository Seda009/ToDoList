import React, { useCallback, useContext, useState, useEffect } from "react";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ToDoCont.css";

import { ToDoContext } from "./todoProvider";

function ToDoCont() {
  const { toDo, setToDo, page, setPage } = useContext(ToDoContext);
  const [checked, setChecked] = useState(false);

  function handleChange(e, item) {
    let checked = item.checked;
    item.checked = !checked;
    setChecked(item.checked);
  }

  function deleteToDo(item1) {
    const updatedToDo = toDo.filter((item) => item.id !== item1.id);
    setToDo(updatedToDo);
  }

  function editFunction(item) {
    const editInput = prompt("Edit your text");
    const editedToDo = toDo.map((todo) =>
      todo.id === item.id ? { ...todo, todo: editInput } : todo
    );

    setToDo(editedToDo);
    console.log(toDo);
    setToDo(editedToDo);
    setToDo((prev) => [...prev, editedToDo]);
  }
  // const slicedData = toDo?.slice(0, 3);
  function loadingFunction() {}
  return (
    <div
      style={{
        height: "200px",
        width: "534px",
        marginLeft: "21px",
        backgroundColor: "white",
        boxShadow: "10px 10px #ededed59",
        overflowY: "scroll",
      }}
    >
      {toDo?.map((item) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginLeft: "20px",
            }}
          >
            <input
              type="checkbox"
              style={{ color: "#b18ac1" }}
              onChange={(e) => handleChange(e, item)}
              id={item.id}
              className="inputCheckbox"
            />
            <label
              htmlFor={item.id}
              style={{ width: "400px" }}
              className={item.checked ? "toDoCompleted" : "toDoNotCompleted"}
            >
              {item.todo}
            </label>

            <p>
              <FontAwesomeIcon
                icon={faEdit}
                style={{ color: " rgb(177, 138, 193) ", cursor: "pointer" }}
                onClick={() => editFunction(item)}
              />
            </p>
            <p
              onClick={() => deleteToDo(item)}
              style={{ color: " rgb(177, 138, 193) ", cursor: "pointer" }}
            >
              x
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default ToDoCont;
