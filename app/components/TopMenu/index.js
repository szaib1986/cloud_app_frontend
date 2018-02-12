import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import {
    RaisedButton, FontIcon, IconButton, FlatButton, IconMenu, MenuItem, Popover
} from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { blue500, red500, greenA200, white } from 'material-ui/styles/colors';
import ActionHome from 'material-ui/svg-icons/action/home';
import NotificationSms from 'material-ui/svg-icons/notification/sms';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
const TopMenu = (props) => {
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
        <div style={fullHeight}>
            <FlatButton
                label="Log In"
                labelPosition="after"
                style={iconStyles.icon} />
        </div>
    );
}

TopMenu.propTypes = {
};

export default TopMenu;