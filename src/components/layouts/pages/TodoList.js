import React, { useState } from "react";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [todo, setToDo] = useState([]);
  function handleChange(e) {
    setTask(e.target.value);
    console.log(task);
  }

  function handle() {
    setToDo([task, ...todo]);
    console.log(todo);
  }
  function handleDelete(index) {
    const newTodo = [...todo]
    newTodo.splice(index, 1)
    setToDo(newTodo)
}

  return (
    <>
      <input className="mt-4 ml-3" onChange={handleChange} type="text" name="" id="" />
      <button className="btn btn-primary ml-2" onClick={handle}>add</button>
      <ul>
        {todo.map((item, index) => (
          <li key={index}>{item}
          <button onClick={()=>handleDelete(index)} className="btn btn-primary fa-1 ml-3 mt-2">X</button>
          </li>
          ))}
      </ul>
    </>
  );
};

export default TodoList;




















