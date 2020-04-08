import React from 'react';
import './service.style.scss';

const Service = (props) => {
    return (
        <div className='service'>
            <div className='cover'>    
                <div className="outer-ring center"></div>
                <div 
                className="inner-ring center" 
                style={{backgroundImage:`url(${props.imageURL})`}}
                >
                </div>
            </div>
            <h3 className='tag'>{props.tag.toUpperCase()}</h3>
        </div>
    );
}
export default Service;