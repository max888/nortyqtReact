import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Home from './components/home';
import About from './components/about';
import VehicleIndex from './components/vehicles_index';

export default (
    <Route path="/" component={App} >
        <IndexRoute component={Home} />
        <Route path="/about" component={About} />
        <Route path="/vehicles" component={VehicleIndex} />

    </Route>
);