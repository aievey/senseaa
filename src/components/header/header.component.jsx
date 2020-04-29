import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import './header.style.scss';



const Header = () => {
    const [toggle, setToggle] = useState(false)
    let sidebar;
    let backdrop;
    if (toggle) {
    sidebar = <div className="toggle-nav">
                <Link className='toggle-tab' onClick={()=>setToggle(!toggle)} to='/projects/'>Projects</Link>
                <Link className='toggle-tab' to='/practice' >Practice</Link>
                <Link className='toggle-tab' to='/people'>People</Link>
    </div>;
    backdrop= <div className='backdrop' onClick={()=>setToggle(!toggle)}></div>
    }
    return(
        <div className='header'>
            <div className='tab-container'>
                <div className='firstHalf'>
                    <Link className='logo' to='/'><b >SENSE</b> AA</Link>
                    <Link className='tab' to='/projects'>Projects</Link>
                    <Link className='tab' to='/practice'>Practice</Link>
                    <Link className='tab' to='/people'>People</Link>
                </div>
                <div className='secondHalf'>
                <Link className='tab special' to='workshops'>
                Workshops
                </Link>
                    <span className='tab'>Blog</span>
                    <span className='tab' onClick={()=>alert('Phone:+91 9108561648\nsense.aa.firm@gmail.com\nsense.firm@gmail.com')}>Contact Us</span>
                    <div className='toggle' onClick={()=>setToggle(!toggle)}>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                    </div>
                    {sidebar}
                    {backdrop}
                </div> 
            </div>
        </div>
    );
}

export default Header;