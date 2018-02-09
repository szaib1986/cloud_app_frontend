import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import FontAwesome from 'react-fontawesome';
import { IconButton, FlatButton, RaisedButton, AppBar, Drawer } from 'material-ui';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import NavigationMoreVert from 'material-ui/svg-icons/navigation/more-vert';
import ActionHome from 'material-ui/svg-icons/action/home';
const Navigation = ({toggleDrawer, isDrawerOpen}) => {
    const style = {
        marginRight: 20,
    };
    return (
        <div className="navigation">
            <AppBar 
            title="Title"
            iconElementLeft=
                {<IconButton onClick={toggleDrawer}>
                    <NavigationMenu />
                </IconButton>}
            iconElementRight={<IconButton><ActionHome /></IconButton>}
            >               
            </AppBar>
            <Drawer onRequestChange={toggleDrawer} docked={false} open={isDrawerOpen} >
            </Drawer>
        </div>
    );
}

Navigation.propTypes = {
    toggleDrawer: PropTypes.func.isRequired,
    isDrawerOpen: PropTypes.bool
};

export default Navigation;