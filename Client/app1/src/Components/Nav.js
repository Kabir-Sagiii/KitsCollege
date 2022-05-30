import React from 'react';
import {Link} from 'react-router-dom'

function Nav(props) {
    return (
        <div>
            <nav className='navbar navbar-dark bg-dark'>
                <div className='container'>
                    <a href="" className='navbar-brand'>MERN STACK</a>
                    <ul className='nav'>
                        <li className='nav-item'>
                            <Link to="/" className='nav-link text-white'>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/user" className='nav-link text-white'>User</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/profile" className='nav-link text-white'>Profile</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/register" className='nav-link text-white'>Register</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Nav;