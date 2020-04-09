import React from 'react';
import './workshops.style.scss';
import Workshop from '../../components/workshop/workshop.component';

const Workshops = () => {
    return(
        <div className='workshops'>
        <h1 className='title'>WORKSHOPS</h1>
        <div className='container'>        
                <p className='content'>At SENSE AA we truly believe that the only way humans have come so far in this world was by
spreading our knowledge 7 Information. By sharing what we know, we were able to collaborate and
achieve greater things as a species.</p>
                <p className='content'>In this Regards SENSE AA always go an extra mile to share gained skills, Knowledge & Information.</p>
                <p className='content'>We regularly organize various HANDS ON, SOFTWARE, THEORY and Lecture Series workshops at
various venues & locations. Find the best suitable workshops for you and register at the earliest.</p>
                <p className='content'>We encourage young architects & architecture students to attend workshops.</p>
                <p className='content alert'>Due to unavoidable circumstances, all the workshops have been postponed till further notice.</p>
        </div>
        <div className=''>
            <Workshop/>
        </div>
        </div>
    );
}

export default Workshops;