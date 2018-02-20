import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import { RaisedButton, Card, CardText, CardHeader } from 'material-ui';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import NavigationMoreVert from 'material-ui/svg-icons/navigation/more-vert';
import ActionHome from 'material-ui/svg-icons/action/home';
import { cyan500, orange500, amber900, white, amber100 } from 'material-ui/styles/colors';
import { amber600 } from 'material-ui/styles/colors';
import { amber50 } from 'material-ui/styles/colors';
import { blueGrey300 } from 'material-ui/styles/colors';
import { blueGrey50, blueGrey500 } from 'material-ui/styles/colors';
import { indigo500 } from 'material-ui/styles/colors';
const Login = (props) => {

    return (
        <div className="page-container">
            <div className="page-content">
                <Card className="card">
                    <CardHeader style={{backgroundColor: "rgb(232, 232, 232)"}}
                      title="Login"
                    //   subtitle="Subtitle"
                    />
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                </Card>
            </div>
        </div>
    );
}

Login.propTypes = {
    login_submit: PropTypes.func.isRequired,
};

export default Login;