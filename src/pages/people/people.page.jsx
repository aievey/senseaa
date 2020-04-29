import React from 'react';
import './people.style.scss';

class People extends React.Component {
    render() {
        return(
            <div className='people'>
                <h1 className='title'>PEOPLE</h1>
                <h3>Team of passionate Leaders, Thinkers, Researcheers, Innovators consisting of Architects, Urban and Rural planners, Designers and Engineers</h3>
                <div className='icons-container'>
                    <div className='icon'></div>
                    <div className='icon'></div>
                    <div className='icon'></div>
                    <div className='icon'></div>
                    <div className='icon'></div>
                    <div className='icon'></div>
                    <div className='icon'></div>
                </div>
            </div>
        );
    }
}

export default People;