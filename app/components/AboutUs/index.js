import React from 'react';
import { render } from "react-dom";
import PageHeader  from "../Includes/PageTitle/index";
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
const AboutUs = (props) => {
    return (
        <div className="page-container">
            <PageHeader title="About Us" />
            <div className="page-content">
                <Card className="card">
                    {/* <CardHeader style={{backgroundColor: "rgb(232, 232, 232)"}}
                      title="Without Avatar"
                      subtitle="Subtitle"
                    /> */}
                    {/* <CardActions>
                      <FlatButton label="Action1" />
                      <FlatButton label="Action2" />
                    </CardActions> */}
                    <CardText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
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

export default AboutUs;