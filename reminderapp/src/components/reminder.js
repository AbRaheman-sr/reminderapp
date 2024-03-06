import React, { useState } from "react";
import { addTask } from "./Redux.js";
import { useDispatch, useSelector } from "react-redux";

const Reminder = () => {
  const [myTask, setMyTask] = useState("");
  const dispatch = useDispatch();

  const output = useSelector((item) => {
    return item.myReducer.AllTask;
  });

  const inputChangeHandler = (e) => {
    setMyTask(e.target.value);
  };

  const taskAdded = () => {
    dispatch(addTask(myTask));
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Add Task"
          onChange={inputChangeHandler}
        />
        <button type="submit" onClick={taskAdded}>
          Submit
        </button>
      </div>
      <div>
        {output.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </div>
    </>
  );
};

export default Reminder;
