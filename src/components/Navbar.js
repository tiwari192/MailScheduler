import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {NavLink} from 'react-router-dom'
import Logo from '../images/mailLogo.png'


const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <NavLink className="navbar-brand ms-auto" to="/">
                        <div className="d-flex">
                            <img src = {Logo} className = "px-3" alt = "Logo" height="40px" />
                            <h4>Mail Scheduler</h4>
                        </div>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">

                            <li className="nav-item mx-3">
                                <NavLink className="nav-link active btn btn-danger p-2" to="/login">Login</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
