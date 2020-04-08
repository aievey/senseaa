import React from 'react';
import './footer.style.scss';
import Fb from '../../assets/icons/facebook-square-brands.svg';
import Ig from '../../assets/icons/instagram-brands.svg';
import Yt from '../../assets/icons/youtube-brands.svg'

const Footer = () => {
    return(
        <div className='footer'>
            <div className='social-links'>
                <div className='icon' style={{backgroundImage:`url(${Fb})`}}></div>
                <div className='icon' style={{backgroundImage:`url(${Yt})`}}></div>
                <div className='icon' style={{backgroundImage:`url(${Ig})`}}></div>
            </div>
            <p className='footer'>&#169; SENSE AA - 2020</p>
        </div>
    );
}

export default Footer;