import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <>

            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <a className="navbar-brand fs-3">Navigation</a>
                        <button className="btn btn-outline-light d-lg-none  ms-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebar">
                            ☰
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item"><Link className="nav-link fs-5 text-light" to={`/`}> show User Information</Link></li>
                                <li className="nav-item"><Link className="nav-link fs-5 text-light"to={`/addpost`}>Add User Information</Link></li>
                                {/* <li className="nav-item"><Link className="nav-link fs-5 text-light"to={`/editpost`}> Edit User Information</Link></li> */}
                                {/* <li className="nav-item"><Link className="nav-link fs-5 text-light"to={`/demo`}> Demo</Link></li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* Sidebar for Mobile */}
                <div className="offcanvas offcanvas-end bg-dark text-white w-100" tabIndex={-1} id="sidebar">
                    <div className="offcanvas-header ">
                        <h5 className="offcanvas-title navbar-brand fs-3">Navigation</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" />
                    </div>
                    <div className="offcanvas-body">
                        <ul className="nav flex-column">
                            <li className="nav-item"><Link className="nav-link text-white" to={`/`}>show User Information</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to={`/addpost`}> Add User Information</Link></li>
                            {/* <li className="nav-item"><Link className="nav-link text-white" to={`/editpost`}> Edit User Information</Link></li> */}

                        </ul>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Navbar
