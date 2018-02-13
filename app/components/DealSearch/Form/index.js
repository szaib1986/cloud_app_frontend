import React from 'react';
import { render } from "react-dom";
import { Card, CardHeader, CardText } from 'material-ui/Card';
import { DropDownMenu, MenuItem, RaisedButton } from 'material-ui';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import MapsDirectionsBus from 'material-ui/svg-icons/maps/directions-bus';
import MapsDirectionsCar from 'material-ui/svg-icons/maps/directions-car';
import MapsDirectionsRailway from 'material-ui/svg-icons/maps/directions-railway';
import { Link } from 'react-router-dom';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
    TableFooter
} from 'material-ui/Table';
import { white } from 'material-ui/styles/colors';
const styles = {
    dropDown: {
        width: "100%"
    },
    block: {
        maxWidth: 250,
    },
    radioGroup: {
        display: "flex",
        justifyContent: "flex-start",
        padding: "0px 24px"
    },
    radioButton: {
        marginBottom: 16,
    },
    submitButton: {
        margin: "14px 24px 0px 24px"
    },
    textCenter: {
        textAlign: 'center'
    },
    textRight: {
        textAlign: 'right'
    },
    totalText: {
        fontWeight: 'bold',
        textAlign: 'left'
    },
    linkBtn:{
        color: white,
        textDecoraton: "none"
    }
};
//Deal Search Form
const DealSearch = (props) => {

    return (
        <div className="deal_search_wrapper">
            <Card className="card">
                <CardHeader style={{ backgroundColor: "rgb(232, 232, 232)" }}
                    title="Search Deals"
                />
                <CardText>
                    <DropDownMenu maxHeight={200} value={props.searchDealForm.From} onChange={props.changeFromLocation} style={styles.dropDown}>
                        <MenuItem value={'-1'} primaryText="From" />
                        {
                            props.locations.map((l, i) => (
                                <MenuItem key={l} value={l} primaryText={l} />
                            ))
                        }
                    </DropDownMenu>
                    <DropDownMenu maxHeight={200} onChange={props.changeToLocation} value={props.searchDealForm.To} style={styles.dropDown}>
                        <MenuItem value={'-1'} primaryText="To" />
                        {
                            props.locations.map((l, i) => (
                                <MenuItem key={l} value={l} primaryText={l} />
                            ))
                        }
                    </DropDownMenu>
                    <RadioButtonGroup onChange={props.changeDealMode} style={styles.radioGroup} name="shipSpeed" defaultSelected={props.searchDealForm.DealMode}>
                        <RadioButton
                            value="Cheapest"
                            label="Cheapest"
                            style={styles.radioButton}
                        />
                        <RadioButton
                            value="Fastest"
                            label="Fastest"
                            style={styles.radioButton}
                        />
                    </RadioButtonGroup>
                    
                    <RaisedButton label={<Link style={styles.linkBtn} to='/searchdealresult'>Search</Link>} primary={true} style={styles.submitButton} />
                </CardText>
            </Card>
        </div>
    )
}

export default DealSearch;