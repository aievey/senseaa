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
import Footer from '../../components/footer/footer.component';



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

class Youtube extends React.Component {
    constructor() {
        super();
        this.state = {
            links:['https://www.youtube.com/embed/fSJqoaDDXM4?autoplay=1&loop=1','https://www.youtube.com/embed/SlhE4--7lEM','https://www.youtube.com/embed/PTNw2HgbNLQ','https://www.youtube.com/embed/HQizxEeIjCs'],
        }
        console.log(this.state.links)
    }
    render() {
        const yt = this.state.links.map(
            yt=><iframe 
            width="510" 
            height="288" 
            src={yt} 
            style={{margin:'0.2em 0.2em'}}
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen">
            </iframe>
            )
            let grid = <GridCell items={yt}/>
        return <Cell content={grid} heading='Videos'/>;
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
                    <Footer />
                    <Vision />
                    <Services />
                    <Projects /> 
                    <GetInTouch />
                    <Youtube />
                    <SAAforte />               
                </div>
            
        );
    }
}
export default Home;