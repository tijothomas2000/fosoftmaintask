import './Navbar.scss';
import '../../../styles/fonts.css';
import '../../../styles/buttons.css';
import { useState } from 'react';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className='navbar'>
            <div className="navContainer">
                <div className="navbarContent">
                    <div className='branding'>F<div className='innertext'></div> O</div>
                    <div className="navLinks">
                        <ul className='navLinksContainer'>
                            <li className='linkFont navLinkFont'>Our Divisions</li>
                            <li className='linkFont navLinkFont'>Works</li>
                            <li className='linkFont navLinkFont'>About Us</li>
                            <li className='linkFont navLinkFont'>Contact Us</li>
                        </ul>
                       
                    </div>
                    <button className='primaryBtn navBtn'>
                        <ChatBubbleIcon fontSize='small' />
                        Let&apos;s Talk
                        <ArrowForwardIcon fontSize='small' />
                    </button>
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
                                <li className='linkFont menuLinkFont'>Contact Us</li>
                                <div className="menuBtnContainer">
                                    <button className='primaryBtn menuBtn'>
                                        <ChatBubbleIcon fontSize='small' />
                                        Let&apos;s Talk
                                        <ArrowForwardIcon fontSize='small' />
                                    </button>
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