import './ContactUs.scss';
import indiaGatePic from '../../assets/images/indiagate.jpg';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const ContactUs = () => {
  return (
    <div className='contactUs'>
      <div className="container">
        <div className="contactusContainer">
          <div className="contactusContent">
            <div className="contactusHeadings">
              <h2 className='contactusHeading'>Branches Beyond Borders, Engage with Our Global Network</h2>
              <h3 className='contactusSubHeading'>DROP US A LINE</h3>
            </div>
            <div className="mainaddressContainer">
              <div className="addressContent">
                <h3 className='locationHeading'>INDIA</h3>
                <figure>
                  <img src={indiaGatePic} alt="" />
                </figure>
                <div className="addressMain">
                  <h4 className='addressFontHead'>FO Groups Pvt Ltd</h4>
                  <p className='addressFontSub'>56, 5th ring road,</p>
                  <p className="addressFontSub">Kottayam, Kerala, India, 686868</p>
                </div>
                <div className="addressMain">
                  <div className="contact"><CallIcon className='contactIcon'/><p className='addressFontSub'>+91 8886667774</p></div>
                  <div className="contact"><EmailIcon className='contactIcon'/><p className='addressFontSub'>hello@fogroups.com</p></div>
                </div>
              </div>
              <div className="addressContent">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs;