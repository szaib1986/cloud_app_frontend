import React, { Component } from "react";
import { render } from "react-dom";
import Navigation from "../../components/Navigation/index";
import  { connect } from 'react-redux';
import { toggleDrawer } from './actions';
import { toJS, fromJS } from "immutable";

//Navigation container to control the state of Top Navigation
class NavigationContainer extends Component {
    render() {
        return (
            <Navigation {...this.props} />
        );
    }
}

const mapStateToProps = ({NavigationReducer}) => {
    return NavigationReducer.toJS();
}

function mapDispatchToProps(dispatch) {
    return {
      dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer)