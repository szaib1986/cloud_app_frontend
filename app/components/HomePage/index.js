import React from 'react';
import { render } from "react-dom";
import PageHeader  from "../Includes/PageTitle/index";
import DealSearchFormContainer from '../../containers/DealSearchContainer/FormContainer/index';
//Home Page Component
const HomePage = (props) => {
    return (
        <div className="page-container">
            <PageHeader title="Trip Sorter" />
            <div className="page-content">
                <DealSearchFormContainer />
            </div>
        </div>
    )
}

export default HomePage;