import React from 'react';
import './bottom-navigation.style.scss';
import {Link} from 'react-router-dom';
import Phone from '../../assets/icons/phone-alt-solid.svg';
import Mail from '../../assets/icons/envelope.svg';
import Location from '../../assets/icons/map-marker-alt-solid.svg';
import { TiLocation} from 'react-icons/ti';
import { MdLocalPhone,MdMail } from "react-icons/md";


const BottomNavigation = () => {
    return(
        <div className='bottom-navigation'>
            <div className='container'>
                <div className='bottom-navigation-column'>
                    <h3 className='head'>Contact Us</h3>
                    <p className='sub'>India:</p> 
                    <div className='flex'>
                        <MdLocalPhone/>                        
                        <div >
                            <p className='sub'>+91 9108561648</p>
                            <p className='sub'>(Everyday: IST 9:30 AM - 9:30PM)</p><br/>
                        </div>
                    </div>
                    <div className='flex'>
                        <MdMail />
                        <div>
                            <p className='sub highlight'><b>sense.aa.firm@gmail.com</b></p>
                            <p className='sub highlight'><b>sense.firm@gmail.com</b></p>
                        </div>
                    </div> <br/>
                    <div className='flex'>
                        <TiLocation/>
                    <div>
                        <p className='sub'>F6&7, First floor Jeewan Shopping Centre, Gomti Nagar Lucknow - 226010.</p>
                        <p className='sub'>UP, India.</p>
                    </div>
                    </div>
                   
                </div>
                <div className='bottom-navigation-column'>
                    <h3 className='head'>Company</h3>
                    <Link className='sub' to='/practice'><p className='sub'>About Us</p></Link>
                    <Link className='sub' to='/company'><p className='sub'>Privacy Policy</p></Link>
                    <Link className='highlight sub' to='/company'><p className='highlight sub'>Fee Structure</p></Link>
                </div>
                <div className='bottom-navigation-column'>
                    <h3 className='head'>Careers</h3>
                    <p className='sub'>Candidates who are future proof with a clear vision to change the world are always welcome to join us.</p><br/>
                    <p className='highlight sub head'>Write us with a Cover Letter & Resume on sense.firm@gmail.com</p>
                    <Link to='/people'>
                    <button className='button' type=''>Know more</button>
                    </Link>
                </div>
                <div className='bottom-navigation-column'>
                    <h3 className='head'>Subscribe</h3>
                    <p className='sub'>Stay updated on latest news & events at SENSE AA and worrld architecture.</p><br/>
                    <div className='connect sub'>                    
                        <p className='sub'>For monthly newsletter send a "hello" on <span className='highlight'>sense.firm@gmail.com</span></p>
                        {/* <input type='text' placeholder='you@example.com'/><br/><br/> */}
                        {/* <button className='button' type='submit'>Submit</button> */}
                    </div>
                </div>    
            </div>            
        </div>
    );
}

export default BottomNavigation;