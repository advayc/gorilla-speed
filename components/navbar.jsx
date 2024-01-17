import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className='navbar-text'>
                <Link className='navbar-element' href="/">Home</Link>
            </ul>
        </nav>
    );
};

export default Navbar;