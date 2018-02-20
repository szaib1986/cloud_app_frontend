import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

const ZoomedImage = (props) => {
    
    return (
        <div className="zoomed-container">
            <h2>ZoomedImage</h2>
            <img src={props.selectedImage.src} />
        </div>
    );
}

ZoomedImage.propTypes = {
};

export default ZoomedImage;