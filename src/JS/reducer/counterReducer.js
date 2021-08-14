import { ADD_TASK, DELETE_TASK, COMPLETE_TASK, EDIT_TASK,Filter_TASK  } from "../types/index";
const initialeState = {
  tasks: [
    {
      id: 0,
      task: "learn js",
      isDone: true,
    },
    {
      id: 1,
      task: "learn ES6",
      isDone: true,
    },
    {
      id: 3,
      task: "learn API",
      isDone: false,
    },
  ],
};
const counterReducer= (state=initialeState,{type,payload})=>{
    switch (type) {
        case ADD_TASK: 
        return{
            ...state,
          tasks: [...state.tasks,payload],

        };
        case DELETE_TASK:
            return{
                ...state,
                tasks:state.tasks.filter((el)=>el.id!==payload),
            };
            case COMPLETE_TASK:
                return{
                    ...state,
                    tasks:state.tasks.map((el)=>el.id===payload?{...el,isDone :! el.isDone}:el),
                };
                case  EDIT_TASK:
                    return{
                        ...state,
                        tasks:state.tasks.map((el)=>el.id===payload ?{...el,task:payload.newValue}:el)
                    };
                    case Filter_TASK :
                      return{
                        ...state,
                        tasks:state.tasks.filter((el)=>!el.isDone),
                      };
            
         
    
        default:
           return state;
    }

}
export default counterReducer;
