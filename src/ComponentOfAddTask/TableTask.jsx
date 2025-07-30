import {useEffect, useState, useContext} from 'react';
import ContextTheme from '../ContextTheme';

function TableTask(props) {
    const {task, handleAddInput, handleAddTaskToList, autoFocus} = props;
    const [hover, setHover] = useState(false);
    const inputBack = useContext(ContextTheme)

    useEffect(()=>{
        autoFocus.current.focus();
    }, [])

    return(
        <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center', width:'250px', height:'190px', backgroundColor:'#00000029', borderRadius:'20px'}}>
            <p style={{fontFamily:'Verdana, Geneva, Tahoma, sans-serif', fontWeight:'700', fontSize:'16px'}}>Write To Add Task</p>
            <input style={{width:'230px', height:'80px', borderRadius:'20px', border:'0px', backgroundColor: inputBack ? 'gray' : 'white', color: inputBack ? '#252525' : '#252525'}} type='text' onChange={handleAddInput} value={task?.text || ''} ref={autoFocus}/>
            <button style={{width:'78px', height:'40px', borderRadius:'20px', border:'0px', backgroundColor:'#081E346B', color:'white', fontFamily:'Verdana, Geneva, Tahoma, sans-serif', fontWeight:'700px', fontSize:'14px', cursor:'pointer', transition: 'opacity 0.5s', opacity: hover ? 1 : 0.6}} onClick={()=>handleAddTaskToList()} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>Add</button>
        </div>
    )
}
export default TableTask;