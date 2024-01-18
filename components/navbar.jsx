import Link from 'next/link'
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className='navbar-text'>
                <Link className='navbar-element' href="/">Home</Link>
                <Link className='navbar-element' href="/clicks">Clicking Speed</Link>
                <Link className='navbar-element' href="/typing">Typing Speed</Link>
                <Link className='navbar-img' href="https://github.com/advay-c/gorilla-speed"><FaGithub /></Link>
            </ul>
        </nav>
    );
};

export default Navbar;

