import TableTask from "./TableTask";
import {useState} from 'react';

function AddTask(props) {
    const {addTask, handleAddTask, handleAddInput, task, handleAddTaskToList, autoFocus} = props;
    const [hover, setHover] = useState(false);

    return(
        <>
        <button style={{display:'flex', 
            justifyContent:'center', alignItems:'center',
            width:'52px', height:'52px', color:'white', 
            borderRadius:'100px', backgroundColor:'#081E34', 
            fontSize:'35px',
            cursor:'pointer',
            transition: 'opacity 0.5s', 
            opacity: hover ? 1 : 0.6}}
            onClick={()=>handleAddTask()}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >+</button>
        {addTask ? (
            <TableTask handleAddInput={handleAddInput} task={task} handleAddTaskToList={handleAddTaskToList} autoFocus={autoFocus}/>
        ):null}
        </>
    )
}
export default AddTask;