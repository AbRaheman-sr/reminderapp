import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddTodo } from "./Redux";

const Practice = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setTodo(e.target.value);
  };

  const AddToDO = () => {
    dispatch(AddTodo(todo));
  };
  const output = useSelector((data) => {
    return data.todoReducer.AllToDo;
  });
  return (
    <>
      <div>
        <input type="text" placeholder="To DO List" onChange={inputHandler} />
        <button onClick={AddToDO}>Add ToDo</button>
      </div>
      <div>
        {output.map((value) => {
          return <li>{value}</li>;
        })}
      </div>
    </>
  );
};

export default Practice;
