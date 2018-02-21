import React from 'react';
import { render } from "react-dom";
import PageHeader  from "../Includes/PageTitle/index";
import {Card, CardActions, CardText} from 'material-ui';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
const HomePage = (props) => {
    return (
        <div className="page-container">
            <PageHeader title="Talent to Hire" />
            <div className="page-content">
                <Card className="card" style={{padding:20}}>
                    <FlatButton>
                        Please go to <RaisedButton
                        label="Gallery"
                        primary={true}
                        style={{marginLeft: 20}}
                        onClick={()=> {window.location.href='/gallery';}}
                        ></RaisedButton>
                    </FlatButton>
                </Card>
            </div>
        </div>
    )
}

// class HomePage extends React.Component {
//     render() {
//         return (
//             <h2>HOME PAGE 001</h2>
//         )
//     }
// }

export default HomePage;