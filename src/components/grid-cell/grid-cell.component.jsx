import React from 'react';
import './grid-cell.component.scss';

const GridCell =(props)=> {
    return (
        <div className='grid-cell'>{props.items}</div>
    );
}

export default GridCell;