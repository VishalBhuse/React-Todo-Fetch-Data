import axios from "axios";
import { useEffect, useState } from "react";
import { AddTodo } from "./AddTodo";
import TodoList from "./TodoList";

export default function Todo() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((e) => {
      setTodo(e.data);
    });
  }, []);

  const handleAdd = (text) => {
    setTodo([
      ...todo,
      {
        id: Date.now(),
        status: false,
        title: text
      }
    ]);
  };

  const hanndleDelete = (id) => {
    const updatedata = todo.filter((el) => el.id !== id);
    setTodo(updatedata);
  };

  const handletoggle = (id) => {
    const updatedata = todo.map((el) =>
      el.id === id
        ? {
            ...el,
            status: !el.status
          }
        : el
    );
    setTodo(updatedata);
  };

  return (
    <>
      <AddTodo handleAdd={handleAdd} />

      <TodoList
        data={todo.filter((el) => !el.status)}
        handletoggle={handletoggle}
        hanndleDelete={hanndleDelete}
      />

      <h2>Completed Todo List</h2>

      <TodoList
        data={todo.filter((el) => el.status)}
        handletoggle={handletoggle}
        hanndleDelete={hanndleDelete}
      />
    </>
  );
}
