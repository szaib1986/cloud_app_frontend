import React, { Component } from "react";
import { render } from "react-dom";
import Login from "../../components/Login/index";
import  { connect } from 'react-redux';
import { loginUser } from './actions';
import { toJS, fromJS } from "immutable";

class LoginContainer extends Component {
    render() {
        return (
            <Login {...this.props} />
        );
    }
}

const mapStateToProps = ({LoginReducer}) => {
    return LoginReducer.toJS();
}

function mapDispatchToProps(dispatch) {
    return {
      dispatch,
      login_submit: () => dispatch(loginUser())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)