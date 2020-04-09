import React from 'react';
import './forte.style.scss'

const Forte =(props) => {
    return (
        <div id="wrapper" className='forte'>
            <article className="card">
              <a>
                <div className="card-text">
                  <div className="card-meta">{props.title}</div>
                  <h2 className="card-title">{props.description}</h2>
                </div>
                <img className="card-image" src={props.cover} />
              </a>
            </article>
        </div>
    );
}

export default Forte;