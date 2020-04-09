import React from 'react';
import './cell.component.scss';

const Cell =(props)=> {
    let head;
    if (props.heading) {
        head = <div className='head'>{props.heading}</div>
    }
    
    return(
        <div className='cell' style={{backgroundColor:props.background}}>{head}{props.content}</div>
    );
}

export default Cell;