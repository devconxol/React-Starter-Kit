import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from '../Home'

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <Route exact path='/' component={Home} />
                </div>
            </Router>
        );
    }
}
