import React, { Component } from "react";
import { render } from "react-dom";
import Navigation from "../../components/Navigation/index";
import  { connect } from 'react-redux';
import { toggleDrawer } from './actions';
import { toJS, fromJS } from "immutable";

class NavigationContainer extends Component {
    render() {
        return (
            <Navigation {...this.props} />
        );
    }
}

const mapStateToProps = ({NavigationReducer}) => {
    let navState = NavigationReducer.toJS();
    return {
       isDrawerOpen: navState.isDrawerOpen
    }
}

function mapDispatchToProps(dispatch) {
    return {
      dispatch,
      toggleDrawer: () => dispatch(toggleDrawer())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer)