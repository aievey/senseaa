import React from 'react';
import './practice.style.scss';
class Practice extends React.Component {
    render() {
        return(
            <div className='practice'>
            <h1 className='title'>PRACTICE</h1>
                <div className='section'>
                    <span className='heading'>About Us</span>
                    <p className='content'>SENSE AA is a young premium Architecture & Urban    Design Studio imbued with a spirit of Research &   Innovation.
                        <br />
                        SENSE AA stands for SENSE in Architecture.
                        <br />
                        Every Project is sculpted to its peak values of     Architecture with                   intense     personal involvement of the principal architects &  subject                  matter specialists. We  strive constantly to create projects     that                stands out, in terms of     Architecture, Materials & Workmanship.
                    </p>
                </div>
                <div className='section'>
                    <span className='heading'>Philosophy</span>
                    <p className='content'>
                    Architecture is a great way to utilizing the HUMAN INTELLIGENCE in efficient way.
                    <br />
Our Aim is to deliver service to humanity in form of their happy space where they spend their most of the time.
<br />
In a survey it says that people spend 93% of their time of life indoor. When we are indoor, we are surrounded by people, furniture and last are walls and yes doors.
<br />
So, in this Indoor time don’t you think this door, furniture and walls should be in accordance with people, they can sense us and we can sense them more. The space around should sensible and responsible enough to take care of us and keep us happy. That’s where SENSE play a strong role and so the SENSE Art & Architecture.
                    </p>
                </div>
                <div className='section'>
                    <span className='heading'>Vision</span>
                    <p className='content'>
                    Vision is creating most advanced & efficient architecture to serve & accommodate the rarest thing in the universe till date, that is human intelligence. 
                    <br />
Architecture is a service to mankind to have their own environment at their own time. It’s a freedom to humanity to stay in their own built cocoon and experience it and feel free to act, to live, to laugh, to serve, to generate, to create.
                    </p>
                </div>
            </div>
        );
    }
}

export default Practice;