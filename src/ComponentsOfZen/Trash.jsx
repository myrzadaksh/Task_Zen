import {useState, useContext} from 'react';
import ContextTheme from '../ContextTheme';

function Trash(props) {
    const {showTrash, backColor} = props;
    const [hover, setHover] = useState(false);
    const themeGlobal = useContext(ContextTheme);

    return(
        <>
        {themeGlobal == false ? (
            <button style={{display:'flex', justifyContent:'center', alignItems:'center', height:'40px', width:'105px', borderRadius:'30px', backgroundColor: backColor === 3 ? '#081E346B' : '#081E340D', color: backColor === 3 ? 'white' : 'black', border:'0px', fontWeight:'500', fontSize:'16px', cursor:'pointer', transition: 'opacity 0.5s', opacity: hover ? 1 : 0.6}} 
        onClick={showTrash}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
            Trash
        </button>
        ) : (
            <button style={{display:'flex', justifyContent:'center', alignItems:'center', height:'40px', width:'105px', borderRadius:'30px', backgroundColor: backColor === 3 ? '#081E346B' : '#081E340D', color: backColor === 3 ? 'white' : 'white', border:'0px', fontWeight:'500', fontSize:'16px', cursor:'pointer', transition: 'opacity 0.5s', opacity: hover ? 1 : 0.6}} 
        onClick={showTrash}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
            Trash
        </button>
        )}
        </>
    )
}
export default Trash;