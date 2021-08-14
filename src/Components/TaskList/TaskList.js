import React from 'react'
import TaskItem from '../TaskItem/TaskItem'
import { useSelector } from 'react-redux'
const TaskList = () => {
const tasks = useSelector(state => state.counterReducer.tasks)
    return (
        <div>
        
           {tasks.map((el)=> <TaskItem todo={el} key={el.id}/>)}
       

        </div>
    )
}

export default TaskList
