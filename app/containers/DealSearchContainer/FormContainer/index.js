import React, { Component } from "react";
import PropTypes from 'prop-types';
import { render } from "react-dom";
import DealSearchForm from "../../../components/DealSearch/Form/index";
import { connect } from 'react-redux';
import { toJS, fromJS } from "immutable";
import { loadTrips, loadUniqueLocations, setSearchDealFormValue } from './actions';
import { Redirect } from "react-router-dom";

//component to display the Deal Search Form
class DealSearchFormContainer extends Component {
    componentWillMount() {
        this.props.loadTrips();
        this.props.loadUniqueLocations()
    }

    render() {
        return (
            <DealSearchForm {...this.props} />
        );
    }
}


const mapStateToProps = ({ DealSearchFormReducer }) => {
    return DealSearchFormReducer.toJS();
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        loadTrips: () => dispatch(loadTrips()),
        loadUniqueLocations: () => dispatch(loadUniqueLocations()),
        changeFromLocation: (proxy, index, value) => dispatch(setSearchDealFormValue(value, "From")),
        changeToLocation: (proxy, index, value) => dispatch(setSearchDealFormValue(value, "To")),
        changeDealMode: (proxy, value) =>  dispatch(setSearchDealFormValue(value, "DealMode"))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DealSearchFormContainer)