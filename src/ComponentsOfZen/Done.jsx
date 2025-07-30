import {useState, useContext, useEffect} from 'react';
import ContextTheme from '../ContextTheme';

function Done(props) {
    const {showDone, backColor} = props;
    const [hover, setHover] = useState(false);
    const themeGlobal = useContext(ContextTheme);

    return(
        <>
        {themeGlobal == false ? (
            <button style={{display:'flex', justifyContent:'center', alignItems:'center', height:'40px', width:'105px', borderRadius:'30px', backgroundColor: backColor === 2 ? '#081E346B' : '#081E340D', color: backColor === 2 ? 'white' : 'black', border:'0px', fontWeight:'500', fontSize:'16px', cursor:'pointer', transition: 'opacity 0.5s', opacity: hover ? 1 : 0.6}} 
        onClick={()=>showDone()} 
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
            Done
        </button>
        ) : (
            <button style={{display:'flex', justifyContent:'center', alignItems:'center', height:'40px', width:'105px', borderRadius:'30px', backgroundColor: backColor === 2 ? '#081E346B' : '#081E340D', color: backColor === 1 ? 'white' : 'white', border:'0px', fontWeight:'500', fontSize:'16px', cursor:'pointer', transition: 'opacity 0.5s', opacity: hover ? 1 : 0.6}} 
        onClick={()=>showDone()} 
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
            Done
        </button>
        )}
        </>
    )
}
export default Done;