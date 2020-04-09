import React from 'react';
import './projects.style.scss';
import Cell from '../../components/component-cell/cell.component';
import GridCell from '../../components/grid-cell/grid-cell.component';
import ProjectData from '../../site-data/all-projects/all-projects.data';
import ProjectModal from '../../components/cards/project-modal.component';

class Projects extends React.Component {
    constructor() {
        super();
        this.state ={
            ProjectData
        }
    }
    render() {
        const projectsList1 = 
            this.state.ProjectData[0].map(
                ap=> <ProjectModal 
                key={ap.id} 
                title={ap.title} 
                imageURL={ap.cover} 
                location={ap.location} 
                status={ap.status}
                modal={ap.modal}
                />
            )
            
           const projectsList2 =
                this.state.ProjectData[1].map(
                ap=> <ProjectModal 
                key={ap.id} 
                title={ap.title} 
                imageURL={ap.cover} 
                location={ap.location} 
                status={ap.status}
                modal={ap.modal}
                />
            )
            
            const projectsList3 =
            this.state.ProjectData[2].map(
                ap=> <ProjectModal 
                key={ap.id} 
                title={ap.title} 
                imageURL={ap.cover} 
                location={ap.location} 
                status={ap.status}
                modal={ap.modal}
                />
            )
            const projectsList4 =
            this.state.ProjectData[3].map(
                ap=> <ProjectModal 
                key={ap.id} 
                title={ap.title} 
                imageURL={ap.cover} 
                location={ap.location} 
                status={ap.status}
                modal={ap.modal}
                />
            )
            
        
        const grid = <GridCell items={[projectsList1, projectsList2, projectsList3, projectsList4]} />


        return(
        <div className='projects-page'>
            <h1 className='title'>PROJECTS</h1>
            <div>
                <span>cat1</span>
                <span>cat2</span>
                <span>cat3</span>
            </div>
            <Cell content={grid}/>           
        </div>
        );
    }
}

export default Projects;