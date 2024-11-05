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
                  <div className="contact"><CallIcon className='contactIcon' /><p className='addressFontSub'>+91 8886667774</p></div>
                  <div className="contact"><EmailIcon className='contactIcon' /><p className='addressFontSub'>hello@fogroups.com</p></div>
                </div>
              </div>
              <div className="addressContent">
                <div className="mapcontainer">
                  <h2 className='contactSubHeading'>Locate Us</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.3075385542274!2d76.8309273740737!3d9.654741878882318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07b52e2f9b33f5%3A0x9cc6267e76832ba!2sFabres%20Orbis%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1730816048404!5m2!1sen!2sin" width="600" height="450" 
                    allowfullscreen="" loading="lazy" 
                    style={{ border: 0, borderRadius: `14px`, width: `100%` }}
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs;