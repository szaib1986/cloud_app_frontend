import { render } from 'react-dom';
import React from 'react';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import { HomePage } from "../../components/HomePage/index";
import NavigationContainer from "../NavigationContainer/index";
// import Footer from '../../components/Footer/index';
export default class App extends React.Component {
    render() {
        return (
            <div className="main-body-container">
                <NavigationContainer />
                <Router>
                    <Switch>
                        <Route exact path='/' component={HomePage}/>
                    </Switch>
                </Router>
                
            </div>
        )
    }
}

