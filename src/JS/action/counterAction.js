import { ADD_TASK,DELETE_TASK,COMPLETE_TASK,EDIT_TASK,Filter_TASK  } from "../types/index";

export const addTask = (newTask) => {
  return{
    type:ADD_TASK ,
    payload: newTask
  };
};
export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload:id
})
export const completeTask = (id) => ({
    type: COMPLETE_TASK,
    payload:id
})
export const editTask = (id,newValue) => ({
    type:EDIT_TASK ,
    payload: {id,newValue},
});
export const filterTask = id => ({
  type:Filter_TASK,
  payload:id,
})


