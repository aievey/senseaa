import React from 'react';
import './cell.component.scss';

const Cell =(props)=> {
    return(
        <div className='cell' style={{backgroundColor:props.background}}>{props.content}</div>
    );
}

export default Cell;