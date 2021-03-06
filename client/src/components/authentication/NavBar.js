//ALL DONE HERE! :)
import React from 'react';
import { NavLink } from 'react-router-dom';


function NavBar(props) {
    return (
        <nav className="Navbar navbar navbar-expand-md navbar-dark mb-4" style={{ backgroundColor: 'teal' }}>
            <span className="navbar-brand font-weight-bold"></span>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* Left-aligned stuff */}
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/" exact>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/users" exact>Users</NavLink>
                    </li>
                    {
                        props.user && (
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/members-only">Members Only</NavLink>
                            </li>
                        )
                    }
                </ul>
            </div>

            {/* Right-aligned stuff */}
            {
                props.user
                    ?   
                        (
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName="active" to={`/users/${props.user.id}`}>Profile ({props.user.username})</NavLink>
                                </li>
                                <li className="nav-item">
                                    {/* Simulate <NavLink> (it requires 'to' attribute, but we don't have one) */}
                                    <span className="nav-link" style={{ cursor: 'pointer' }} onClick={props.onLogout}>Logout</span>
                                </li>
                            </ul>
                        )
                    :
                        (
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/login">Login</NavLink>
                                </li>
                            </ul>
                        )
            }
        </nav>
    );
}

export default NavBar;