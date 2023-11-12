import { Link } from 'react-router-dom';

function Navbar () {

    return (
        <div id="nav-container">
            <nav id="nav">
                <Link className="nav-item" to="/about">About</Link>
                <Link className="nav-item" to="/press">Press</Link>
                <Link className="nav-item" to="/schedule">Schedule</Link>
                <Link className="nav-item" to="/media">Media</Link>
                <Link className="nav-item" to="/contact">Contact</Link>
            </nav>
        </div>
    )
}

export default Navbar;