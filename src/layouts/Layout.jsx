import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import './Layout.scss';
import Footer from '../components/Footer/Footer.jsx';

const Layout = () => {
    return (
        <div className="main">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout