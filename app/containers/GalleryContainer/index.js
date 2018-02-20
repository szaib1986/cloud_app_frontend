import React, { Component } from "react";
import { render } from "react-dom";
import Gallery from "../../components/Gallery/index";
import { loadGallery } from "./actions";
import ZoomedImage from "../../components/Gallery/ZoomedImage/index";
import  { connect } from 'react-redux';
import { toJS, fromJS } from "immutable";

class GalleryContainer extends Component {
    componentWillMount() {
        this.props.loadGalleryImages();
    }
    render() {
        return (
            <div>
                <Gallery {...this.props} />
                <ZoomedImage {...this.props} />
            </div>
        );
    }
}

const mapStateToProps = ({GalleryReducer}) => {
    return GalleryReducer.toJS();
}

function mapDispatchToProps(dispatch) {
    return {
      dispatch,
      showZoomedImage: () => { alert("Clicked")},
      loadGalleryImages: () => dispatch(loadGallery())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryContainer)