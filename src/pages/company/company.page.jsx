import React from 'react';
import './company.page.style.scss';

const Company = () => {
    return(
        <div className='company'>
            <h1 className='title'>COMPANY</h1>
            <div className='section'>
                    <span className='heading'>DISCLAIMER</span>
                    <p className='content'>
                    Where every care has been taken to ensure the accuracy of the contents of www.senseaa.in, we do not warrant its completeness, quality and accuracy, nor can we guarantee that it is up-to-date.<br/><br/>
Complete information has not been displayed due to confidential reasons. <br/><br/>
All the content & pictures which are presented on the website www.senseaa.in are copyright to <b>SENSE AA</b> are purely meant only for the reference & information purpose to our potential clients & other audience, With no intension of any type of advertisement in any means.<br/><br/>
Any of the image, drawing, sketch or render cannot be used in any means without written permission from the principals of <a style={{textDecoration:'none',color:'auto'}} href='https://www.senseaa.in/' target='_blank' title='Council of Architecture'><b>www.senseaa.in</b></a>
                    </p>
                </div>
                <div className='section'>
                    <span className='heading'>FEE STRUCTURE</span>
                    <p className='content'>
                    Fees is applicable according the latest guidelines form <b>COA & Govt of India</b> prescription., against any of the Architecture Services provided.<br/><br/>
For more information regarding this <a style={{textDecoration:'none',color:'auto'}} href='https://www.coa.gov.in/index1.php?lang=1&level=1&sublinkid=293&lid=271' target='_blank' title='Council of Architecture'><b>Council of Architecture</b></a>
                    </p>
                </div>
        </div>
    );
}

export default Company;