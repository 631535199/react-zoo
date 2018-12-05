import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './home';
import About from './about';

const Routes = () => (
    <Router>
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
        </div>
    </Router>
)

export default Routes;

