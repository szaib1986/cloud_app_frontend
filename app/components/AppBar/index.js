import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
function AppBar({ toggleDrawer }) {
  return (
    <div className="appBarContainer">
      <div className="iconButton" onClick={() => toggleDrawer()}>
        <FontAwesome className="icon" name="bars" />
      </div>
      <div className="appBarHeading">APP</div>
    </div>
  );
}

AppBar.propTypes = {
  toggleDrawer: PropTypes.func.isRequired
};

export default AppBar;