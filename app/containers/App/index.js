import { render } from 'react-dom';
import React from 'react';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "../../components/HomePage/index";
import Footer from "../../components/Footer/index";
import NavigationContainer from "../NavigationContainer/index";
import DealSearchResultContainer from "../DealSearchContainer/DealSearchResultContainer/index";
export default class App extends React.Component {
    render() {
        const styles = {
            marginLeft: "15px", 
            marginRight: "15px", 
            overflow: "hidden", 
            height: "100%"
        };
        return (
            <div className="main-body-container">
                <NavigationContainer />
                <div style={styles}>
                <Router>
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route exact path='/searchdealresult' component={DealSearchResultContainer} />
                    </Switch>
                </Router>
                <Footer />
                </div>
            </div>
        )
    }
}

