import React from 'react';
import './projects.style.scss';
// import Card from '../../components/cards/card.component';
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
        return(
        <div className='projects-page'>
            <h1 className='title'>PROJECTS</h1>
            <div>
                <span>cat1</span>
                <span>cat2</span>
                <span>cat3</span>
            </div>
            <div className='projects-div'>
                {this.state.ProjectData[0].map(
                    ap=> <ProjectModal 
                    key={ap.id} 
                    title={ap.title} 
                    imageURL={ap.cover} 
                    location={ap.location} 
                    status={ap.status}
                    modal={ap.modal}
                    />
                )
                }
                {this.state.ProjectData[1].map(
                    ap=> <ProjectModal 
                    key={ap.id} 
                    title={ap.title} 
                    imageURL={ap.cover} 
                    location={ap.location} 
                    status={ap.status}
                    modal={ap.modal}
                    />
                )
                }
                {this.state.ProjectData[2].map(
                    ap=> <ProjectModal 
                    key={ap.id} 
                    title={ap.title} 
                    imageURL={ap.cover} 
                    location={ap.location} 
                    status={ap.status}
                    modal={ap.modal}
                    />
                )
                }
                {this.state.ProjectData[3].map(
                    ap=> <ProjectModal 
                    key={ap.id} 
                    title={ap.title} 
                    imageURL={ap.cover} 
                    location={ap.location} 
                    status={ap.status}
                    modal={ap.modal}
                    />
                )
                }
            </div>
        </div>
        );
    }
}

export default Projects;