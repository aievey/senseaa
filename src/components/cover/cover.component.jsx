import React from 'react';
import CoverData from './cover.data';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './cover.style.scss';


class Cover extends React.Component {
    constructor() {
        super();
        this.state = {
            CoverData
        }
    }
    render() {
      var settings = {
          arrows:false,
        dots: false,
        autoplay:true,
        autoplaySpeed:5000,
      infinite: true,
      speed: 500,
      centerPadding:false,
      pauseOnHover:false,
      slidesToShow: 1,
      slidesToScroll: 1
      };
      return (
        <Slider {...settings}>
          <div>
          <div className='carousel' style={{backgroundImage:`url(${this.state.CoverData[0].imageURL})`}}>
          <div className='cover-logo'></div>
            <div className='carousel-tag'>
              <h1 className='carousel-tag-h'>{this.state.CoverData[0].description}</h1>
              <p className='carousel-tag-p'>{this.state.CoverData[0].subdescription}</p>
              <h2 className='carousel-tag-h2'>{this.state.CoverData[0].title}</h2>
            </div>
          </div>
          </div>
          <div>
            <div className='carousel' style={{backgroundImage:`url(${this.state.CoverData[1].imageURL})`}}>
            <div className='cover-logo'></div>
              <div className='carousel-tag'>
              <h1 className='carousel-tag-h'>{this.state.CoverData[1].description}</h1>
              <p className='carousel-tag-p'>{this.state.CoverData[1].subdescription}</p>
              <h2 className='carousel-tag-h2'>{this.state.CoverData[1].title}</h2>
            </div>
            </div>
          </div>
          <div>
            <div className='carousel' style={{backgroundImage:`url(${this.state.CoverData[2].imageURL})`}}>
            <div className='cover-logo'></div>
              <div className='carousel-tag'>
              <h1 className='carousel-tag-h'>{this.state.CoverData[2].description}</h1>
              <p className='carousel-tag-p'>{this.state.CoverData[2].subdescription}</p>
              <h2 className='carousel-tag-h2'>{this.state.CoverData[2].title}</h2>
            </div>
            </div>
          </div>
          <div>
            <div className='carousel' style={{backgroundImage:`url(${this.state.CoverData[3].imageURL})`}}>
            <div className='cover-logo'></div>
              <div className='carousel-tag'>
              <h1 className='carousel-tag-h'>{this.state.CoverData[3].description}</h1>
              <p className='carousel-tag-p'>{this.state.CoverData[3].subdescription}</p>
              <h2 className='carousel-tag-h2'>{this.state.CoverData[3].title}</h2>
            </div>
            </div>
          </div>
          <div>
            <div className='carousel' style={{backgroundImage:`url(${this.state.CoverData[4].imageURL})`}}>
            <div className='cover-logo'></div>
              <div className='carousel-tag'>
              <h1 className='carousel-tag-h'>{this.state.CoverData[4].description}</h1>
              <p className='carousel-tag-p'>{this.state.CoverData[4].subdescription}</p>
              <h2 className='carousel-tag-h2'>{this.state.CoverData[4].title}</h2>
            </div>
            </div>
          </div>
          <div>
            <div className='carousel' style={{backgroundImage:`url(${this.state.CoverData[5].imageURL})`}}>
            <div className='cover-logo'></div>
              <div className='carousel-tag'>
              <h1 className='carousel-tag-h'>{this.state.CoverData[5].description}</h1>
              <p className='carousel-tag-p'>{this.state.CoverData[5].subdescription}</p>
              <h2 className='carousel-tag-h2'>{this.state.CoverData[5].title}</h2>
            </div>
            </div>
          </div>
          <div>
            <div className='carousel' style={{backgroundImage:`url(${this.state.CoverData[6].imageURL})`}}>
            <div className='cover-logo'></div>
              <div className='carousel-tag'>
              <h1 className='carousel-tag-h'>{this.state.CoverData[6].description}</h1>
              <p className='carousel-tag-p'>{this.state.CoverData[6].subdescription}</p>
              <h2 className='carousel-tag-h2'>{this.state.CoverData[6].title}</h2>
            </div>
            </div>
          </div>
          <div>
            <div className='carousel' style={{backgroundImage:`url(${this.state.CoverData[7].imageURL})`}}>
            <div className='cover-logo'></div>
              <div className='carousel-tag'>
              <h1 className='carousel-tag-h'>{this.state.CoverData[7].description}</h1>
              <p className='carousel-tag-p'>{this.state.CoverData[7].subdescription}</p>
              <h2 className='carousel-tag-h2'>{this.state.CoverData[7].title}</h2>
            </div>
            </div>
          </div>
          <div>
            <div className='carousel' style={{backgroundImage:`url(${this.state.CoverData[8].imageURL})`}}>
            <div className='cover-logo'></div>
              <div className='carousel-tag'>
              <h1 className='carousel-tag-h'>{this.state.CoverData[8].description}</h1>
              <p className='carousel-tag-p'>{this.state.CoverData[8].subdescription}</p>
              <h2 className='carousel-tag-h2'>{this.state.CoverData[8].title}</h2>
            </div>
            </div>
          </div>
          <div>
            <div className='carousel' style={{backgroundImage:`url(${this.state.CoverData[9].imageURL})`}}>
            <div className='cover-logo'></div>
              <div className='carousel-tag'>
              <h1 className='carousel-tag-h'>{this.state.CoverData[9].description}</h1>
              <p className='carousel-tag-p'>{this.state.CoverData[9].subdescription}</p>
              <h2 className='carousel-tag-h2'>{this.state.CoverData[9].title}</h2>
            </div>
            </div>
          </div>
          <div>
            <div className='carousel' style={{backgroundImage:`url(${this.state.CoverData[10].imageURL})`}}>
            <div className='cover-logo'></div>
              <div className='carousel-tag'>
              <h1 className='carousel-tag-h'>{this.state.CoverData[10].description}</h1>
              <p className='carousel-tag-p'>{this.state.CoverData[10].subdescription}</p>
              <h2 className='carousel-tag-h2'>{this.state.CoverData[10].title}</h2>
            </div>
            </div>
          </div>
        </Slider>
      );
    }
  }

export default Cover;