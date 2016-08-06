import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navbar extends React.Component {
    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 col-sm-offset-4e">
                        <img src="/img/Norty-Logo_Film-Rentals.png" alt className="main-logo" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <nav>
                            <ul>
                                <li>Trucks</li>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About Page</Link></li>
                                <li><Link to="/vehicles">Vehicles Page</Link></li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}