import React from 'react';
import './workshop.style.scss';
import { Link } from 'react-router-dom'
// import Practice from '../../pages/practice/practice.page';

class Workshop extends React.Component {
    render() {
        return (
            <div className='workshop-card'>
                <div className='workshop-card-background-animation'>
                    <Link to='/workshop1' className='workshop-card-head'><h1>Vernac 1</h1></Link></div>
                <p className='element height'>MUD</p>
                <p className='element height'>BAMBOO</p>
                <p className='element height'>STONE</p>
                <p className='date height'>01st June - 31st June - 2020</p>
                <Link to='/workshop1'><button className='button' type='submit'>Know More</button></Link>
            </div>
        );
    }
}

export default Workshop;