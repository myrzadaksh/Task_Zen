import {useState, useContext, useEffect} from 'react';
import ContextTheme from '../ContextTheme';

function ToDo(props) {
    const {showToDo, backColor} = props;
    const [hover, setHover] = useState(false);
    const themeGlobal = useContext(ContextTheme);
    
    return(
        <>
        {themeGlobal == false ? (
            <button style={{display:'flex', justifyContent:'center', alignItems:'center', height:'40px', width:'105px', borderRadius:'30px', backgroundColor: backColor === 1 ? '#081E346B' : '#081E340D', color: backColor === 1 ? 'white' : 'black', border:'0px', fontWeight:'500', fontSize:'16px', cursor:'pointer', transition: 'opacity 0.5s', opacity: hover ? 1 : 0.6}} 
            onClick={()=>showToDo()}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            To Do
        </button>
        ) : (
            <button style={{display:'flex', justifyContent:'center', alignItems:'center', height:'40px', width:'105px', borderRadius:'30px', backgroundColor: backColor === 1 ? '#081E346B' : '#081E340D', color: backColor === 1 ? 'white' : 'white', border:'0px', fontWeight:'500', fontSize:'16px', cursor:'pointer', transition: 'opacity 0.5s', opacity: hover ? 1 : 0.6}} 
            onClick={()=>showToDo()}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            To Do
        </button>
        )}
        </>
    )
}
export default ToDo;