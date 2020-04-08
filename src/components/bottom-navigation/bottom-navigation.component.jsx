import React from 'react';
import './bottom-navigation.style.scss';
import {Link} from 'react-router-dom';
import Phone from '../../assets/icons/phone-alt-solid.svg';
import Mail from '../../assets/icons/envelope.svg';
import Location from '../../assets/icons/map-marker-alt-solid.svg';


const BottomNavigation = () => {
    return(
        <div className='bottom-navigation'>
            <div className='container'>
                <div className='bottom-navigation-column'>
                    <h3 className='head'>Contact Us</h3>
                    <p className='sub'>India:</p> 
                    <div className='flex'>
                        <div  className='icon' style={{backgroundImage:`url(${Phone})`}}></div>
                        <div >
                            <p className='sub'>+91 9415435401</p>
                            <p className='sub'>+91 0522 - 4242444</p>
                            <p className='sub'>(Everyday: IST 9:30 AM - 9:30PM)</p><br/>
                        </div>
                    </div>
                    <div className='flex' style={{alignItems:'center'}}>
                        <div className='icon' style={{backgroundImage:`url(${Mail})`}}></div>
                        <div>
                            <p className='sub highlight'><b>info@senseaa.in</b></p>
                        </div>
                    </div> <br/>
                    <div className='flex'>
                    <div  className='icon' style={{backgroundImage:`url(${Location})`}}></div>
                    <div>
                        <p className='sub'>F6&7, First floor Jeewan Shopping Centre, Gomti Nagar Lucknow - 226010.</p>
                        <p className='sub'>UP, India.</p>
                    </div>
                    </div>
                   
                </div>
                <div className='bottom-navigation-column'>
                    <h3 className='head'>Company</h3>
                    <p className='sub'>About Us</p>
                    <p className='sub'>Privacy Policy</p>
                    <p className='highlight sub'>Fee Structure</p>
                </div>
                <div className='bottom-navigation-column'>
                    <h3 className='head'>Careers</h3>
                    <p className='sub'>Candidates who are future proof with a clear vision to change the world are always welcome to join us.</p><br/>
                    <p className='highlight sub head'>Write us with a Cover Letter & Resume on info@senseaa.in</p>
                    <Link to='/career'>
                    <button className='button' type='submit'>Know more</button>
                    </Link>
                </div>
                <div className='bottom-navigation-column'>
                    <h3 className='head'>Subscribe</h3>
                    <p className='sub'>Stay updated on latest news & events at SENSE AA and worrld architecture.</p><br/>
                    <div className='connect sub'>                    
                        <p className='sub'>For monthly newsletter.</p>
                        <input type='text' placeholder='you@example.com'/><br/><br/>
                        <button className='button' type='submit'>Submit</button>
                    </div>
                </div>    
            </div>            
        </div>
    );
}

export default BottomNavigation;