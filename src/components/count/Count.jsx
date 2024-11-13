import React from 'react';
import './Count.scss';
import { useStateValue } from '../../context';
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const Count = () => {
    const [state, dispatch] = useStateValue();
  
    return (
        <div className={`count-theme ${state.theme ? `dark` : ''}`}>
            <div className="theme-change">
                {state.theme ? <MdOutlineDarkMode onClick={()=> dispatch({ type: "CLR" })}/> : <MdDarkMode onClick={()=> dispatch({ type: "CLR" })}/>}
            </div>
            <div className={`count-container ${state.theme ? `dark` : ''}`}>
                <div className={`count-header ${state.theme ? `dark` : ''}`}>Counter</div>
                <div className={`count-display ${state.theme ? `dark` : ''}`}>{state.count}</div>
                <div className="count-controls">
                    <button 
                        className={`count-button ${state.theme ? `dark` : ''}`}
                        onClick={() => dispatch({ type: "DEC" })}
                    >
                        DEC
                    </button>
                    <button 
                        className={`count-button ${state.theme ? `dark` : ''}`}
                        onClick={() => dispatch({ type: "INC" })}
                    >
                        INC
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Count;
