import React from 'react';
import './home.style.scss';
import GridCell from '../../components/grid-cell/grid-cell.component';
import Cell from '../../components/component-cell/cell.component';
import Carousel from '../../components/cover/cover.component';
import Vision from '../../components/vision/vision.component';
import ServiceList from '../../site-data/home-services-data/services.data';
import Service from '../../components/service/service.component';
import Modal from '../../components/cards/project-modal.component';
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
        return (<Cell content={grid} />);
    }
}

class Projects extends React.Component {
    constructor() {
        super();
        this.state = {
            // CardList
        }
        
    }
    render() {
        return(
            <div className='cell'>
            <h2 className='section-title'>Projects</h2>
                <div className='projects-div container'>
                    <div className='projects-home'> {
                    this.state.CardList.map (
                        card => <Modal 
                            key={card.id} 
                            title={card.title} 
                            description={card.description}
                            imageURL={card.imageURL}
                            />
                            )
                        }
                    </div>
                </div>
            </div>
        );
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
        return(<Cell content={grid}/>);
    }
}


class Home extends React.Component {
    render () {
        return (
                <div className='home'>
                    <Carousel />
                    <Vision />
                    <Services />
                    {/* <Projects />  */}
                    <GetInTouch />
                    <SAAforte />               
                </div>
            
        );
    }
}
export default Home;