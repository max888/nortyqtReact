import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/navbar';
import { fetchVehicles } from '../actions/index';


class Home extends Component {

    componentWillMount() {
        this.props.fetchVehicles();
    }


    render () {
        return (
            <div className="home">
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1>Home Page...</h1>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return { vehicles: state.vehicles.all };
}

export default connect(mapStateToProps, { fetchVehicles })(Home);





