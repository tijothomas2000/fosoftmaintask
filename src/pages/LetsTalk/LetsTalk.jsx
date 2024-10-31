import './LetsTalk.scss';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const LetsTalk = () => {
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
                                    <input type="text" placeholder='Enter First Name' />
                                </div>
                                <div className="nameContent">
                                    <h3 className='textFont'>Last Name</h3>
                                    <input type="text" placeholder='Enter Last Name' />
                                </div>
                            </div>
                            <div className="nameFields">
                                <div className="nameContent">
                                    <h3 className='textFont'>E-Mail</h3>
                                    <input type="email" placeholder='Enter E-Mail ID' />
                                </div>
                                <div className="nameContent">
                                    <h3 className='textFont'>Contact</h3>
                                    <input type="tel" placeholder='Enter Contact No.' />
                                </div>
                            </div>
                            <div className="nameFields">
                                <div className="nameContent">
                                    <h3 className='textFont'>Message</h3>
                                    <textarea type="text" placeholder='Type Here.' />
                                </div>
                            </div>
                            <button className='primaryBtn'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LetsTalk;