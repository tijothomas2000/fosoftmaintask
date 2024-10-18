import './Footer.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footerContainer">
                <div className="footerContent">
                    <div className='branding'>F<div className='innertext'></div> O</div>
                    <div className="footerSub">
                        <h3 className='footerSubHeading'>Address</h3>
                        <p className='footerText'>F.O Groups LLP,</p>
                        <p className='footerText'>56, 5th ring road,</p>
                        <p className='footerText'>Kottayam, Kerala, India</p>
                    </div>
                    <div className="footerSub">
                        <h3 className='footerSubHeading'>Contact</h3>
                        <p className='footerText'>E-Mail : info@fo.com</p>
                        <p className='footerText'>Head Office :  +91 22332201 </p>
                        <p className='footerText'>Sales :  +91 22332201</p>
                        <p className='footerText'>HR :  +91 22332201</p>
                    </div>
                    <div className="footerSub">
                        <h3 className='footerSubHeading'>Quick Links</h3>
                        <p></p>
                    </div>
                    <div className="footerSub">
                        <h3 className='footerSubHeading'>Socials</h3>
                        <p></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer