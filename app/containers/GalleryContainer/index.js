import React, { Component } from "react";
import { render } from "react-dom";
import Gallery from "../../components/Gallery/index";
import { loadGallery, changePage, setGalleryColumns, openImageAddDialog, closeDialog, saveImage, loadImageCarousel, openCarousel, closeCarousel } from "./actions";
import ZoomedImage from "../../components/Gallery/ZoomedImage/index";
import { connect } from 'react-redux';
import { toJS, fromJS } from "immutable";
import { Dialog, FlatButton, TextField, RaisedButton } from 'material-ui';

class GalleryContainer extends Component {
    componentWillMount() {
        this.props.loadGalleryImages();
        this.props.containerWidth();
    }

    componentDidMount() {
        window.addEventListener("resize", this.props.containerWidth.bind(this));
    }
    
    componentWillUnmount() {
        window.removeEventListener("resize", this.props.containerWidth.bind(this));
    }

    onFileChange(e) {
        
        let file = e.target.files[0];
        let allowedFiles = ['image/png','image/jpg', 'image/jpeg']
        if (allowedFiles.indexOf(file.type) == -1) {
            alert("Invalid file type");
            document.getElementById("add_image").value = "";
            return false;
        }
        let reader = new FileReader();
        let preview = document.getElementById("preview");

        reader.addEventListener("load", () => {
            preview.src = reader.result;
            preview.style.display = "inline-block"
        }, false);

        if (file)
            reader.readAsDataURL(file);
    }
    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                secondary={true}
                onClick={this.props.cancelAddDialog}
            />,
            <RaisedButton
                label="Save"
                primary={true}
                onClick={this.props.saveImage}
            />,
        ];

        return (
            <div style={{ height: "100%" }}>
                <Gallery {...this.props} />
                <ZoomedImage {...this.props} />
                <Dialog
                    title="Add Image"
                    actions={actions}
                    modal={true}
                    open={this.props.isAddImgDialogOpen}
                    titleClassName="dialog-header"
                    bodyClassName="dialog-body"
                >
                    <label style={{ display: "block", marginBottom: "15px"}}>Please choose an image (JPG, JPEG, PNG only)</label>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <TextField
                            type="file"
                            id="add_image"
                            onChange={this.onFileChange}
                        />
                        <img id="preview"
                            src=""
                            style={{ border: "1px solid #ccc", width: 150, height: 150, display: "none" }} />
                    </div>
                </Dialog>
            </div>
        );
    }
}

const mapStateToProps = ({ GalleryReducer }) => {
    return GalleryReducer.toJS();
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        containerWidth: () => { dispatch(setGalleryColumns()) },
        showZoomedImage: imgId => { dispatch(openCarousel()); dispatch(loadImageCarousel(imgId)); },
        closeCarousel: () => dispatch(closeCarousel()),
        fetchImage: imgId => dispatch(loadImageCarousel(imgId)),
        changePage: page => dispatch(changePage(page)),
        loadGalleryImages: () => dispatch(loadGallery()),
        openImageAddDialog: () => dispatch(openImageAddDialog()),
        cancelAddDialog: () => {
            document.getElementById("preview").style.display = "none";
            document.getElementById("add_image").value = ''
            dispatch(closeDialog())
        },
        saveImage: () => {
            let file = document.getElementById("add_image").value;
            if (!file) {
                alert("No image selected");
                return;
            }
            let dataUrl = document.getElementById("preview").src;
            dispatch(saveImage(dataUrl));
            document.getElementById("preview").style.display = "none";
            document.getElementById("add_image").value = ''
            dispatch(closeDialog())
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryContainer)