import React from 'react';
import './footer.style.scss';
import {FaFacebook,FaInstagram,FaYoutube} from 'react-icons/fa'

const Footer = () => {
    return(
        <div className='footer'>
            <div className='social-links'>
            <a href='https://www.facebook.com/senseaa.in' target='_blank'><FaFacebook /></a>
            <a href='https://www.instagram.com/senseaain' target='_blank'><FaInstagram /></a>
            <a href='https://www.youtube.com/channel/UCSMcwMVWoL8NGmSkqkKu95Q?' target='_blank'><FaYoutube /></a>
            </div>
            <p className='footer display'>&#169; SENSE AA - 2020</p>
        </div>
    );
}

export default Footer;