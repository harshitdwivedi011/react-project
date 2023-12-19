import brandLogo from '../../public/images/brand_logo.png';
import './Header.css'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <div className='main-header'>
            <img src={brandLogo} alt="Brand Logo" />
            <nav className='nav-header'>
                <ul>
                    <li>
                        <Link className="nav-link" to="/" >Menu</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/location">Location</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <button className="btn-login">Login</button>
        </div>
    );
}

export default Header;
