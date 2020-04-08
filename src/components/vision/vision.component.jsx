import React from 'react';
import Cell from '../component-cell/cell.component';
import './vision.component.style.scss';

const Vision = () => {
    const vision = <div className='vision container'>
    <h2 className='vision-title'>World class Inspirational Architecture</h2>
    <p className='vision-content'>At <span><span>SENSE</span>AA</span> we believe in creating world class Inspirational built environment to live in. An Architecture to serve & fulfil all our SENSES.<br/> Creating an object is an opportunity to Inspire, Define & Standardized in many manners.</p>
    </div>

    return(
        <Cell content={vision} />             
    );
}

export default Vision;