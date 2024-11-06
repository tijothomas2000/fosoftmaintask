import { useState } from 'react';
import './LetsTalk.scss';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Email from './smtp.js';

const LetsTalk = () => {
    const [formInput, setFormInput] = useState({
        fName: "",
        lName: "",
        contact: "",
        emailId: "",
        message: ""
    });

    const handleInput = (e) => {
        const inputField = e.target.name;
        const inputValue = e.target.value;
        setFormInput({ ...formInput, [inputField]: inputValue });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Email.send({
            SecureToken: import.meta.env.VITE_API_KEY,
            To: 'tijonarithookil@gmail.com',
            From: 'tijonarithookil@gmail.com',
            Subject: "Enquiry from client",
            Body:
                `First Name: ${formInput.fName},
                Last Name: ${formInput.lName},
                Contact: ${formInput.contact},
                Email: ${formInput.emailId},
                Message: ${formInput.message}`
            // `${JSON.stringify(formInput)}`

        }).then(
            alert("Thank you for your interest in us ! Our team will get in touch with you shortly.")
        );
    }

    return (
        <div className='letstalk'>
            <div className="container">
                <div className="letstalkContainer">
                    <h2 className='headingFont'>General Enquiry</h2>
                    <div className="letstalkContent">
                        <div className="letstalkSideContent">
                            <figure className='enquirySideImage'>
                                <img src="src\assets\letstalk.png" alt="Enquiry Sample Image" />
                            </figure>
                            <h3 className='subheadingFont'>Feel free to share your thoughts.</h3>
                            <button className="brochureContainer">
                                <FileDownloadIcon className='downloadIcon' />
                                Download our Brochure
                            </button>
                        </div>
                        <form className='clientMsgForm'>
                            <div className="nameFields">
                                <div className="nameContent">
                                    <h3 className='textFont'>First Name</h3>
                                    <input type="text" name='fName' value={formInput.fName} placeholder='Enter First Name' onChange={(e) => handleInput(e)} />
                                </div>
                                <div className="nameContent">
                                    <h3 className='textFont'>Last Name</h3>
                                    <input type="text" name='lName' value={formInput.lName} placeholder='Enter Last Name' onChange={(e) => handleInput(e)} />
                                </div>
                            </div>
                            <div className="nameFields">
                                <div className="nameContent">
                                    <h3 className='textFont'>E-Mail</h3>
                                    <input type="email" name='emailId' value={formInput.emailId} placeholder='Enter E-Mail ID' onChange={(e) => handleInput(e)} required />
                                </div>
                                <div className="nameContent">
                                    <h3 className='textFont'>Contact</h3>
                                    <input type="tel" name='contact' value={formInput.contact} placeholder='Enter Contact No.' onChange={(e) => handleInput(e)} required />
                                </div>
                            </div>
                            <div className="nameFields">
                                <div className="nameContent">
                                    <h3 className='textFont'>Message</h3>
                                    <textarea type="text" name='message' value={formInput.message} placeholder='Type Here.' onChange={(e) => handleInput(e)} />
                                </div>
                            </div>
                            <button className='primaryBtn' onClick={(e) => handleSubmit(e)} >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LetsTalk;