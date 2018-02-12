import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import TopMenu from '../TopMenu/index';
import { IconButton, FlatButton, RaisedButton, AppBar, Drawer, List, ListItem, Avatar } from 'material-ui';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import NavigationMoreVert from 'material-ui/svg-icons/navigation/more-vert';
import ActionHome from 'material-ui/svg-icons/action/home';
import { cyan500, orange500, amber900, white, amber100 } from 'material-ui/styles/colors';
import { amber600 } from 'material-ui/styles/colors';
import { amber50 } from 'material-ui/styles/colors';
import { blueGrey300 } from 'material-ui/styles/colors';
const Navigation = (props) => {
    const style = {
        appBar: {
            backgroundColor: blueGrey300
        },
        drawer: {
            backgroundColor: amber50
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
            <AppBar
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
                            label="About Us"
                            labelPosition="after"
                            style={iconStyles.icon} />
                        <FlatButton
                            label="Services"
                            labelPosition="after"
                            style={iconStyles.icon} />
                        <FlatButton
                            label="Contact Us"
                            labelPosition="after"
                            style={iconStyles.icon} />
                    </div>
                }
                iconElementLeft=
                {<IconButton onClick={props.toggleDrawer}>
                    <NavigationMenu />
                </IconButton>}
                iconElementRight={<TopMenu {...props} />}
            >
            </AppBar>
            <Drawer containerStyle={style.drawer} onRequestChange={props.toggleDrawer} docked={false} open={props.isDrawerOpen}>
                <List>
                    <ListItem
                        disabled={true}
                        primaryText={"Image Avatar"}
                        secondaryText="I am description"
                        leftAvatar={
                            <Avatar size={70} src="/assets/images/uxceo-128.jpg" />
                        }>
                        
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
}

Navigation.propTypes = {
    toggleDrawer: PropTypes.func.isRequired,
    isDrawerOpen: PropTypes.bool
};

export default Navigation;