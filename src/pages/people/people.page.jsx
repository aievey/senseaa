import React from 'react';
import './people.style.scss';
import Images from '../../site-data/people/people.data';
import Grid from '../../components/grid-cell/grid-cell.component';
import Cell from '../../components/component-cell/cell.component';

class People extends React.Component {
    constructor () {
        super();
        this.state={Images}
    }
    render() {
        const people= this.state.Images.map(
            person => <div 
            key={person.id} 
            className='icon' 
            style={{backgroundImage:`url(${person.Image})`}}>
            </div>)
        const grid= <Grid items={people}/>
        return(
            <div className='people'>
                <h1 className='title'>PEOPLE</h1>
                <h3>Team of passionate Leaders, Thinkers, Researcheers, Innovators consisting of Architects, Urban and Rural planners, Designers and Engineers</h3>
                {grid}
                <div className='career'>
                <h1 className='heading'>CAREERS</h1>
                <p className='content'>
We are constantly looking for the passionate, most creative and innovative minds in the industry for problem solving, conceptualizing, executing and materializing an idea. If you believe you have all of these, SENSE AA is the place for you!<br/><br/>
<em>Candidates who are future proof with a clear vision to change the world of Architecture are always welcome to join us.</em><br/><br/>
Knowledge of Advanced Softwares like: Revit & Rhino will be preferable.
Write us with a cover letter & Resume on:<br/> sense.firm@gmail.com<br/>sense.aa.firm@gmail.com

                </p>
                </div>                
            </div>
        );
    }
}

export default People;