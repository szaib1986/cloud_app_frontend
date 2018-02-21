import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import { Dialog, FlatButton, FloatingActionButton } from 'material-ui';
import HardwareKeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import HardwareKeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import ContentDeleteSweep from 'material-ui/svg-icons/content/delete-sweep';

const ZoomedImage = (props) => {
    function isNavDisabled(id) {
        return id === null;
    }
    return (
        <Dialog
            modal={false}
            open={props.isGalleryCarouselOpen}
            bodyStyle={{padding: "0px"}}
            onRequestClose={props.closeCarousel}
            repositionOnUpdate={true}
            autoDetectWindowHeight= {true}
        >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <FlatButton 
                className="carousel-arrow"
                disabled={isNavDisabled(props.selectedImage.prevImageId)}
                onClick={() => props.fetchImage(props.selectedImage.prevImageId)}
                icon={<HardwareKeyboardArrowLeft />}
                />
                 <FloatingActionButton 
                    mini={true}
                    secondary={true}
                    style={{position: "absolute", right: 0,zIndex: 999, top: -15, marginRight: -15 }}
                    onClick={() => props.deleteImage(props.selectedImage.id)}
                >
                    <ContentDeleteSweep />
                </FloatingActionButton>
                <img src={props.selectedImage.src} style={{ height: "60%", width: "75%" }}/>
                <FlatButton 
                className="carousel-arrow"
                disabled={isNavDisabled(props.selectedImage.nextImageId)}
                onClick={() => props.fetchImage(props.selectedImage.nextImageId)}
                icon={<HardwareKeyboardArrowRight />}
                />
            </div>
        </Dialog>
    );
}

ZoomedImage.propTypes = {
    selectedImage: PropTypes.object.isRequired
};

export default ZoomedImage;