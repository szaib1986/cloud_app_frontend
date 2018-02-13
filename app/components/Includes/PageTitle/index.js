import React from 'react';
import { render } from "react-dom";
const PageHeader = (props) => {
    return (
        <div className="page-header">
            <h2>{props.title}</h2>
        </div>
    )
}

export default PageHeader;