import React, { Component } from 'react';
import Navbar from '../components/navbar'

export default class About extends React.Component {
    render () {
        return (
            <div className="about">
                <Navbar />
                <div className="container">
                    <h1>About us...</h1>
                </div>
            </div>
        );
    }
}
