import './Footer.scss';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footerContainer">
                <div className="footerContent">
                    <div className="brandingContainer">

                        <div className='branding'>F<div className='innertext'></div> O</div>
                    </div>
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
                        <Link to='/service1' ><p className='footerText'>FO Builds</p></Link>
                        <Link to='/service2' ><p className='footerText'>FO Softs</p></Link>
                        <p className='footerText'>Careers</p>
                        <Link to='/clientmsg' ><p className='footerText'>Get a Quote</p></Link>
                    </div>
                    <div className="footerSub">
                        <h3 className='footerSubHeading'>Socials</h3>
                        <p className='footerText'><InstagramIcon /> Instagram</p>
                        <p className='footerText'><FacebookIcon /> Facebook</p>
                        <p className='footerText'><LinkedInIcon /> LinkedIn</p>
                        <p className='footerText'><GoogleIcon /> Google</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer