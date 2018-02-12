import React from 'react';
import { render } from "react-dom";
import TextField from 'material-ui/TextField';
const PageHeader = (props) => {
    return (
        <div className="page-header">
            <h2>{props.title}</h2>
            <TextField style={{marginTop: "12px"}}
                hintText="Search Site"
            />
        </div>
    )
}

export default PageHeader;