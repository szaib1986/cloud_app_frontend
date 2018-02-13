import React, { Component } from "react";
import PropTypes from 'prop-types';
import { render } from "react-dom";
import DealSearchResult from "../../../components/DealSearch/SearchResult/index";
import { connect } from 'react-redux';
import { toJS, fromJS } from "immutable";
import { searchDeal } from './actions';

class DealSearchResultContainer extends Component {
    componentWillMount() {
        this.props.searchDeal()
    }
    
    render() {
        
        return (
            <DealSearchResult {...this.props} />
        );
    }
}


const mapStateToProps = ({DealSearchResultReducer}) => {
    return DealSearchResultReducer.toJS();
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        searchDeal: () => dispatch(searchDeal(dispatch))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DealSearchResultContainer)