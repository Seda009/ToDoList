import React, { createContext, useState } from "react";
import edit from "./360_F_446971547_TDhfzyzpIS4ZsOXJBnUqznuZxwjsKVRl.jpg";

export const ToDoContext = createContext();

export function ToDoProvider({ children }) {
  const [toDo, setToDo] = useState([
    {
      toDoName: "Wash dishes",
      id: 1,
      checked: false,
    },
    {
      toDoName: "Help mother",
      id: 2,
      checked: false,
    },
    {
      toDoName: "Sweep the floor",
      id: 3,
      checked: false,
    },
  ]);

  return (
    <ToDoContext.Provider value={{ toDo, setToDo }}>
      {children}
    </ToDoContext.Provider>
  );
}
