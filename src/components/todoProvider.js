import React, { createContext, useState, useEffect } from "react";
import edit from "./360_F_446971547_TDhfzyzpIS4ZsOXJBnUqznuZxwjsKVRl.jpg";

export const ToDoContext = createContext();

export function ToDoProvider({ children }) {
  const [toDo, setToDo] = useState(null);
  const [loadingToDo, setLoadingToDo] = useState(3);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((response) => response.json())
      .then((data) => setToDo(data?.todos.slice(0, page * loadingToDo)));
  }, [page]);

  return (
    <ToDoContext.Provider value={{ toDo, setToDo, page, setPage }}>
      {children}
    </ToDoContext.Provider>
  );
}
