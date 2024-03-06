import { createStore, combineReducers } from "redux";

//Initial Data
const initialData = {
  AllTask: ["Playing", "eating"],
  AllToDo: ["Study", "Coding"],
};

//ACTION
export const addTask = (task) => {
  return {
    type: "ADD_TASK",
    payload: task,
  };
};

export const AddTodo = (todo) => {
  return {
    type: "ADD_TODO",
    payload: todo,
  };
};

const todoReducer = (state = initialData, ToDoAction) => {
  if (ToDoAction.type === "ADD_TODO") {
    return {
      AllToDo: [...state.AllToDo, ToDoAction.payload],
    };
  }

  return state;
};

//Reducer function
const myReducer = (state = initialData, action) => {
  if (action.type === "ADD_TASK") {
    return {
      AllTask: [...state.AllTask, action.payload],
    };
  }
  return state;
};

// Combining all reducers
const allReducer = combineReducers({
  myReducer: myReducer,
  todoReducer: todoReducer,
});

//Creating Store
export const myStore = createStore(allReducer); //can not pass multiple reducers combine it into oneReducer using Redux.combineReducers Methos
