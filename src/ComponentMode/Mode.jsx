import {useState, useContext} from 'react';
import ContextTheme from '../ContextTheme';

function Mode(props) {
    const [hover, setHover] = useState(false);
    const {changeTheme} = props;
    const themeGlobal = useContext(ContextTheme);

    return(
        <button style={{display:'flex', height:'30px', width:'65px', justifyContent:'center', alignItems:'center', borderRadius:'50px', border:'0px', backgroundColor: themeGlobal ? '#E0E0E0' : '#081E340D', transition: 'opacity 0.5s', opacity: hover ? 1 : 0.6, cursor:'pointer', color: themeGlobal ? 'E0E0E0' : 'black'}}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => changeTheme()}>Mode</button>
    )
}
export default Mode;