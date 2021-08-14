import React from 'react'
import { useDispatch } from 'react-redux'
import { completeTask, deleteTask } from '../../JS/action/counterAction'
import EditTask from '../EditTask/EditTask'
import './TaskItem.css'
const TaskItem = ({todo}) => {
const dispatch= useDispatch()
    return (
        <div className='task'>

            <div className= {todo.isDone ? 'Done': null}>
                {todo.task}
            </div >
            <button class="btn btn-info" onClick={()=>dispatch(completeTask(todo.id))}>{todo.isDone? 'Undo':'Complete'}</button>
            <button  class="btn btn-info"onClick={()=>dispatch(deleteTask(todo.id))}>Delete</button>
            
            <EditTask todo={todo}/>
          


            
            

        </div>
    )
}

export default TaskItem
