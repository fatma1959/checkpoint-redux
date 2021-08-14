import React from 'react'
import { useDispatch} from 'react-redux'
import { filterTask } from '../../JS/action/counterAction';
const FilterTask = () => {
  const dispatch=useDispatch()
  const filter=()=>{
      dispatch(filterTask());
  }
    return (
        <div>
    <button class="btn btn-danger" onClick={filter}>Filter</button>
        </div>
    )
}

export default FilterTask
