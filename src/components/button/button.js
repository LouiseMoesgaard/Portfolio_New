import React from 'react';
import './button.scss';


function Button(props) {

    return(

        <button 
            type={props.type? props.type : 'button'} 
            className={props.className? props.className : 'base'} 
            onClick={props.onClick}
            disabled={props.disabled}>
                 <span>{props.value}</span>
        </button>
        )
}

export default Button;