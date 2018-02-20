import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import { IconButton, FlatButton, RaisedButton, AppBar } from 'material-ui';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import NavigationMoreVert from 'material-ui/svg-icons/navigation/more-vert';
import ActionHome from 'material-ui/svg-icons/action/home';
import { cyan500, orange500, amber900, white, amber100 } from 'material-ui/styles/colors';
import { amber600 } from 'material-ui/styles/colors';
import { amber50 } from 'material-ui/styles/colors';
import { blueGrey300 } from 'material-ui/styles/colors';
import { blueGrey50, blueGrey500 } from 'material-ui/styles/colors';
import { indigo500 } from 'material-ui/styles/colors';
import ImageGridOn from 'material-ui/svg-icons/image/grid-on';
const Navigation = (props) => {
    const style = {
        appBar: {
            backgroundColor: blueGrey500
        }
    };

    const fullHeight = {
        height: "100%"
    }
    const iconStyles = {
        iconButton: {
            marginRight: 24,
            height: "100%",

        },
        icon: {
            color: white,
            height: fullHeight.height
        }
    };

    return (
        <div className="navigation">
            <AppBar className="app-bar"
                style={style.appBar}
                title={
                    <div style={fullHeight} className="Zaib">
                        <FlatButton
                            label="Home"
                            labelPosition="after"
                            style={iconStyles.icon}

                            icon={<ActionHome />}
                        />
                        <FlatButton
                            label="Gallery"
                            labelPosition="after"
                            style={iconStyles.icon}
                            icon={<ImageGridOn />} />
                    </div>
                }
                iconElementLeft=
                {<IconButton onClick={props.toggleDrawer}>
                    <NavigationMenu />
                </IconButton>}
            >
            </AppBar>
        </div>
    );
}

Navigation.propTypes = {
};

export default Navigation;