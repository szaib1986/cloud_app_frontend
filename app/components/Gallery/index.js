import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import PageHeader from "../Includes/PageTitle/index";
import IconButton from 'material-ui/IconButton';
import { Card, CardText, FloatingActionButton, GridList, GridTile, Subheader } from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
const Gallery = (props) => {
  const styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    gridList: {
      width: "100%",
      overflowY: 'auto',
    },
  };
  function containerWidth() {
    if (screen.width < 768)
      return 1
    else if (screen.width > 768)
      return 5
    else
      return 2
  }
  function formatDateOnly(date) {
    let d = new Date(date);
    return d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear()
  }
  function renderGallery(gallery) {

    if (!gallery || gallery.length == 0) {
      return (
        <h2>No Image Found!</h2>
      )
    }

    if (gallery && gallery.length > 0)
      return (<GridList
        cellHeight={180}
        style={styles.gridList}
        cols={containerWidth()}
        padding={20}
      >
        {props.gallery.map((galleryImg) => (
          <GridTile
            key={galleryImg.id}
            title={<span>Added on: <b>{formatDateOnly(galleryImg.createdDate)}</b></span>}
            onClick={() => props.showZoomedImage(galleryImg.id)}
          >
            <img src={galleryImg.src} style={{width: "100%"}} />
          </GridTile>
        ))}
      </GridList>);
  }
  return (
    <div className="page-container">
      <PageHeader title="Gallery" />
      <div className="page-content">
        <FloatingActionButton 
        style={{position: "absolute", right: 0,zIndex: 999, bottom: 40, marginRight: 20 }}
        onClick={props.openImageAddDialog}
        >
          <ContentAdd />
        </FloatingActionButton>
        <Card className="card">
          <CardText style={styles.root}>
            {renderGallery(props.gallery)}
          </CardText>
        </Card>
      </div>
    </div>
  );
}

Gallery.propTypes = {
  gallery: PropTypes.array.isRequired,
  showZoomedImage: PropTypes.func.isRequired
};

export default Gallery;