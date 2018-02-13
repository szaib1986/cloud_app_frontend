import React from 'react';
import { render } from "react-dom";
import PageHeader from "../../Includes/PageTitle/index";
import PropTypes from 'prop-types';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import MapsDirectionsBus from 'material-ui/svg-icons/maps/directions-bus';
import MapsDirectionsCar from 'material-ui/svg-icons/maps/directions-car';
import MapsDirectionsRailway from 'material-ui/svg-icons/maps/directions-railway';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
    TableFooter
} from 'material-ui/Table';
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
    }
};
//Deal Search Form
const DealSearch = ({ searchResult }) => {
    function getIcon(transport) {
        switch (transport) {
            case "bus":
                return <MapsDirectionsBus />;
                break;
            case "train":
                return <MapsDirectionsRailway />;
                break;
            case "car":
                return <MapsDirectionsCar />;
                break;
        }
    }

    return (
        <div className="page-container">
            <PageHeader title="Search Results" />
            <div className="page-content">
                <div className="deal_search_wrapper">
                    <Card className="card search_result">
                        <CardHeader style={{ backgroundColor: "rgb(232, 232, 232)" }}
                            title="Deals Found"
                            subtitle={`${searchResult.mode} way to go from ${searchResult.from} to ${searchResult.to}`}
                        />
                        <CardText>
                            <Table selectable={false}>
                                <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                                    <TableRow>
                                        <TableHeaderColumn>From</TableHeaderColumn>
                                        <TableHeaderColumn>To</TableHeaderColumn>
                                        <TableHeaderColumn style={styles.textCenter}>Via</TableHeaderColumn>
                                        <TableHeaderColumn>Time</TableHeaderColumn>
                                        <TableHeaderColumn style={styles.textRight}>Cost ({searchResult.currency})</TableHeaderColumn>
                                        <TableHeaderColumn style={styles.textRight}>Disc. (%)</TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody displayRowCheckbox={false}>
                                    {
                                        searchResult.path.map((p, i) => (
                                            <TableRow key={p.reference}>

                                                <TableRowColumn>{p.departure}</TableRowColumn>
                                                <TableRowColumn>{p.arrival}</TableRowColumn>
                                                <TableRowColumn style={styles.textCenter}>{getIcon(p.transport)}</TableRowColumn>
                                                <TableRowColumn>{p.duration.h + 'h' + p.duration.m + 'm'}</TableRowColumn>
                                                <TableRowColumn style={styles.textRight}>{p.cost}</TableRowColumn>
                                                <TableRowColumn style={styles.textRight}>{p.discount}</TableRowColumn>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                                <TableFooter adjustForCheckbox={false}>
                                    <TableRow>
                                        <TableRowColumn style={styles.totalText} colSpan="3">Total</TableRowColumn>
                                        <TableRowColumn>{searchResult.totalTime}</TableRowColumn>
                                        <TableRowColumn colSpan="2" style={styles.textCenter}>{searchResult.totalCost}</TableRowColumn>
                                    </TableRow>

                                </TableFooter>
                            </Table>
                        </CardText>
                    </Card>
                </div>
            </div>
        </div>
    )
}

DealSearch.props = {
    searchResult: PropTypes.object.isRequired
}

export default DealSearch;