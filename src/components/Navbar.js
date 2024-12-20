import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/"> NewsMonkey </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Science</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Business</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Entertainment</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Sports</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">General</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Health</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Technology</a>
                                </li>
                            </ul>
                        </div> 
                    </div>
                </nav>
            </div>
        )
    }
}
