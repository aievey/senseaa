import React from 'react';
import '../../components/workshop/workshop.style.scss';
import './workshop1.style.scss';
import workshopImg from '../../assets/workshopCardGraphic/vernac1cover1.jpg';

const Workshop1 = () => {
    return(
        <div className='workshop1'>
            <dev className='section'>
                <div className='workshop-card nobackground'>
                    {/* <div className='workshop-card-background-animation'><h1 className='workshop-card-head'>Vernac 1</h1></div> */}
                    <p className='element height'>MUD</p>
                    <p className='element height'>BAMBOO</p>
                    <p className='element height'>STONE</p>
                    
                </div>
                <div className='workshop-cover'>
                </div>
            </dev>
            <div className='workshop1-head'>
                <h1 className=''>01st June - 31st June - 2020</h1>
                <h3>Location - Rishikesh, Uttarakhand, India</h3>
            </div>
            <div className='section'>
                <img className='cover' alt='workshop image' src={workshopImg}/>
                <div className='workshop1-text'>
                    <h3>Vernac 1</h3>
                    <p>One of its kind workshops where we will start a small-scale architectural project from scratch and will finish it at the end of the workshop. This is going to be a complete architectural journey within 30 days. </p>
                    <h3>Who is this Workshop for ?</h3>
                    <p>The Workshop is open to anyone aged 18+, Architects, Designers, Students, Professionals and Enthusiasts who wants to get a more depth, Comprehensive knowledge on the Principle of the designing Bamboo and Stone as a Vernacular Building Materials.</p>
                </div>
            </div>
            <div className='section'>
            <div className='workshop1-text'>
                    <h3>What You Will Learn ? </h3>
                    <p>Vernacular bamboo and stone building principles.
Construction Process from design to completion and maintenance.
carpentry and joinery methods.
model making for different design stage.
1:1 Hands on experience.</p>
                    <h3>Accommodation Details:</h3>
                    <p>Shared Accommodation (bunk beds) will be Provided with shared toilet facility, Camping tent structure will also be provided, nearby construction site, candidates have to choose between them as per their comfort & preferences.
Food: 
Breakfast, Lunch, Dinner and Snacks will be provided.
Fees Structure:
20K INR including  Workshop, Accommodation & Food.</p>
                </div>
                <img className='cover' alt='workshop image' src={workshopImg}/>
            </div>
        </div>
    );
}

export default Workshop1;