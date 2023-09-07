import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function Header(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="navbarContent">
                    <div className="titleWeb">
                        <Link className="navbar-brand text-light" to="/"><h3>{props.title}</h3></Link>
                    </div>
                    <div className="collapse navbar-collapse menuBox" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-Link active menuOption" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-Link menuOption" to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    )
}

Header.defaultProps = {
    title: "Your Title Here",
    searchBar: true
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    searchBar: PropTypes.bool.isRequired
}