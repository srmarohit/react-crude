import react from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    return (
        <div className="bg-primary">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" to="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <NavLink exact className="nav-link" to="/">Home <span class="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact className="nav-link" to="/contact">Contact Us</NavLink>
                        </li>
                        
                    </ul>
                </div>

                <NavLink exact className="btn btn-md btn-outline-info" to="/users/add">Add User</NavLink>
            </nav>
        </div>
    );
}

export default NavBar;