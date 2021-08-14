import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../../JS/action/counterAction';
import'./AddTask.css';
const AddTask = () => {
    const [text,setText]=useState("");
    const dispatch=useDispatch()

    const add=()=>{
dispatch(addTask({id:Math.random,task:text,isDone:false}))
    }

    return (
        <div className='add'>
           <input type="text" placeholder="add todo ..."
           value={text}
           onChange={(e)=>setText(e.target.value)} /> 
           <button class="btn btn-info" onClick={add}> Add</button>
        </div>
    )
}

export default AddTask

