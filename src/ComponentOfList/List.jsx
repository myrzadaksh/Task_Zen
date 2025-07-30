import {useState, useContext} from 'react';
import ContextTheme from '../ContextTheme';

function List(props) {
    const {list, handleMoveToTrash, handleMoveToToDo, handleMoveToDone, handleDeleteForever} = props;
    const globalTheme = useContext(ContextTheme);
    const [hover, setHover] = useState(null);
    const back = '<';
    const listTasks = list.map((task)=><div key={task.id} style={{
        display:'flex',
        alignItems:'center',
        gap:'10px',
        width:'600px',
        height:'25px',
        borderRadius:'20px',
        marginTop:'15px',
        opacity: hover === task.id ? 1 : 0.6,
        transition: 'opacity 0.5s',
        backgroundColor:'#081E340D'
    }}
    onMouseEnter={() => setHover(task.id)}
    onMouseLeave={() => setHover(null)}
    >
        {task.type === 'todo' ? (
        <>
        <div style={{position: 'relative', width: '10px', height: '10px', margin: '1px', cursor:'pointer'}} onClick={()=>handleMoveToTrash(task)}>
            <div style={{position: 'absolute', width: '100%', height: '3px', backgroundColor: globalTheme ? '#E0E0E0' : '#252525', transform: 'rotate(45deg)', top: '50%', left: '0',transformOrigin: 'center'}}></div>
            <div style={{position: 'absolute', width: '100%', height: '3px', backgroundColor: globalTheme ? '#E0E0E0' : '#252525', transform: 'rotate(-45deg)', top: '50%', left: '0', transformOrigin: 'center'}}></div>
        </div>
        <div style={{width:'4px', height:'10px', borderRight:'3px solid green', solid: 'green', borderBottom: '3px solid green', transform:'rotate(45deg)', margin:'10px', cursor:'pointer'}} onClick={() => handleMoveToDone(task)}></div>
        <div>{task.text}</div>
        </>


        ) : task.type === 'trash' ? (


        <>
        <div style={{fontSize: '18px', transform: 'scaleX(1.2)', margin: '0 10px', cursor: 'pointer', color: globalTheme ? '#E0E0E0' : '#252525'}} onClick={()=>handleMoveToToDo(task)}>{back}</div>
        <div style={{position: 'relative', width: '10px', height: '10px', margin: '1px', cursor:'pointer'}} onClick={() => handleDeleteForever(task)}>
            <div style={{position: 'absolute', width: '100%', height: '3px', backgroundColor: globalTheme ? '#E0E0E0' : '#252525', transform: 'rotate(45deg)', top: '50%', left: '0',transformOrigin: 'center'}}></div>
            <div style={{position: 'absolute', width: '100%', height: '3px', backgroundColor: globalTheme ? '#E0E0E0' : '#252525', transform: 'rotate(-45deg)', top: '50%', left: '0', transformOrigin: 'center'}}></div>
        </div>
        <div>{task.text}</div>
        </>


        ) : task.type === 'done' ? (
        <>
        <div style={{textDecoration:'line-through', color:'gray'}}>{task.text}</div>
        </> 
        ) 
        
        : 
        
        (
        <div>{task.type}</div>
        )}
        </div>)
    return(
        <div style={{height:'370px', width:'700px', marginLeft:'80px'}}>{listTasks}</div>
    )
}
export default List;