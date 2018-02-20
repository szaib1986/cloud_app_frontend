import { render } from 'react-dom';
import React from 'react';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Snackbar } from "material-ui";
import HomePage from "../../components/HomePage/index";
import AboutUs from "../../components/AboutUs/index";
import Footer from "../../components/Footer/index";
import NavigationContainer from "../NavigationContainer/index";
import GalleryContainer from "../GalleryContainer/index"
import { toJS, fromJS } from "immutable";
import  { connect } from 'react-redux';
// import LoginContainer from "../LoginContainer/index"
// import Footer from '../../components/Footer/index';
class App extends React.Component {
    render() {
        const styles = {
            marginLeft: "270px", 
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
                        <Route exact path='/' component={GalleryContainer} />
                        <Route exact path='/aboutus' component={AboutUs} />
                    </Switch>
                </Router>
                <Footer />
                </div>
                <Snackbar
                    open={this.props.toastr.isOpen}
                    message={this.props.toastr.message}
                    autoHideDuration={this.props.toastr.autoHideDuration}
                />
            </div>
        )
    }
}
const mapStateToProps = ({AppReducer}) => {
    return AppReducer.toJS();
}

function mapDispatchToProps(dispatch) {
    return {
      dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
