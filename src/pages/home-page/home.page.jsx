import React from 'react';
import './home.style.scss';
import GridCell from '../../components/grid-cell/grid-cell.component';
import Cell from '../../components/component-cell/cell.component';
import Carousel from '../../components/cover/cover.component';
import Vision from '../../components/vision/vision.component';
import ServiceList from '../../site-data/home-services-data/services.data';
import Service from '../../components/service/service.component';
import ProjectsData from '../../site-data/all-projects/all-projects.data';
import ProjectModal from '../../components/cards/project-modal.component';
import GetInTouch from '../../components/get-in-touch/get-in-touch.component';
import ForteData from '../../site-data/forte/forte.data';
import Forte from '../../components/saa-forte/forte.component';



class Services extends React.Component {
    constructor() {
        super();
        this.state={
            ServiceList
        }
    }
    render() {
        const serviceList = this.state.ServiceList.map(
            tile => <Service 
                key={tile.id}
                id={tile.id}
                imageURL={tile.imageURL}
                tag={tile.tag}

            />
        )
        const grid = <GridCell items={serviceList} />
        return (<Cell content={grid} heading='SERVICES' />);
    }
}

class Projects extends React.Component {
    constructor() {
        super();        
            this.state = {}   
    }
   
    handleProjects (eachProject) {
        if (eachProject.feature) {
            return(
                <ProjectModal 
                key={eachProject.id} 
                title={eachProject.title} 
                imageURL={eachProject.cover} 
                location={eachProject.location} 
                status={eachProject.status}
                modal={eachProject.modal}
                />
            );
        }
    }
    
    render() {
        let pp = ProjectsData.map (
            allProjects => allProjects.map (
            eachProject => this.handleProjects(eachProject)
            )
        )
        const grid =  <GridCell items={pp} />
        return(<Cell content = {grid} heading='PROJECTS' />);
    }
}

class SAAforte extends React.Component {
    constructor() {
        super();
        this.state = {
            ForteData
        }
    }
    render() {
        const forte = this.state.ForteData.map(
            forte=> <Forte 
                key={forte.id} 
                title={forte.title} 
                cover={forte.imageURL} 
                description={forte.description} />
        )
        let grid = <GridCell items={forte}/> 
        return(<Cell content={grid} heading='SENSEAA FORTE'/>);
    }
}


class Home extends React.Component {
    render () {
        return (
                <div className='home'>
                    <Carousel />
                    <Vision />
                    <Services />
                    <Projects /> 
                    <GetInTouch />
                    <SAAforte />               
                </div>
            
        );
    }
}
export default Home;