import React from "react";

import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      text: "Belajar JS"
    },
    {
      text: "Belajar React"
    },
    {
      text: "Belajar Components"
    },
    {
      text: "Belajar Props"
    },
    {
      text: "Belajar Hooks"
    },
    {
      text: "Belajar JS"
    },
    {
      text: "Belajar React"
    },
    {
      text: "Belajar Components"
    },
    {
      text: "Belajar Props"
    },
    {
      text: "Belajar Hooks"
    }
  ];

  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
      ;
    </section>
  );
};

export default Todos;
