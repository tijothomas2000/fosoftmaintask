import './Navbar.scss';
import '../../../styles/fonts.css';
import '../../../styles/buttons.css';
import { useState } from 'react';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [divisions, setDivisions] = useState(false);



    return (
        <nav className='navbar'>
            <div className="navContainer">
                <div className="navbarContent">
                    <Link to='/' className='branding'>F<div className='innertext'></div> O</Link>
                    <div className="navLinks">
                        <ul className='navLinksContainer'>
                            <div className="divisions">
                                <li className='linkFont navLinkFont divisionsText' onClick={() => setDivisions(!divisions)} >Our Divisions</li>
                                {divisions && <div className="divisionsMenu">
                                    <div className="divisionsContent">
                                        <Link to='/service1' onClick={() => setDivisions(false)} ><li>FO Builds</li></Link>
                                        <Link to='/service2' onClick={() => setDivisions(false)} ><li>FO Soft</li></Link>
                                    </div>
                                </div>}
                            </div>
                            <li className='linkFont navLinkFont'>Works</li>
                           <Link to='/'> <a href='#aboutus'><li className='linkFont navLinkFont'>About Us</li></a></Link>
                            <Link to='/contactus'><li className='linkFont navLinkFont'>Contact Us</li></Link>
                        </ul>

                    </div>
                    <Link to='/clientmsg'> <button className='primaryBtn navBtn'>
                        <ChatBubbleIcon fontSize='small' />
                        Let&apos;s Talk
                        <ArrowForwardIcon fontSize='small' />
                    </button></Link>
                    <div className="menuIcons">
                        {!menuOpen && <DragHandleIcon className='dragHandle' onClick={() => setMenuOpen(true)} />}
                        {menuOpen && <CloseIcon className='closeIcon' onClick={() => setMenuOpen(false)} />}
                    </div>
                    {menuOpen &&
                        <div className="navmenu">
                            <ul className='menuLinksContainer'>
                                <li className='linkFont menuLinkFont'>Our Divisions</li>
                                <li className='linkFont menuLinkFont'>Works</li>
                                <li className='linkFont menuLinkFont'>About Us</li>
                                <Link to='/contactus'><li className='linkFont menuLinkFont' onClick={() => setMenuOpen(false)}>Contact Us</li></Link>
                                <div className="menuBtnContainer">
                                    <Link to='/clientmsg' className='primaryBtn menuBtn' onClick={() => setMenuOpen(false)} >
                                        <ChatBubbleIcon fontSize='small' />
                                        Let&apos;s Talk
                                        <ArrowForwardIcon fontSize='small' />
                                    </Link>
                                </div>
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar;