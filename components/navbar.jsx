import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className='navbar-text'>
                <Link className='navbar-element' href="/">Home</Link>
                <Link className='navbar-element' href="/clicks">Clicking Speed</Link>
                <Link className='navbar-element' href="/typing">Typing Speed</Link>
            </ul>
        </nav>
    );
};

export default Navbar;

