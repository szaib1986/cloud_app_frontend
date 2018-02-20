import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import PageHeader  from "../Includes/PageTitle/index";
import IconButton from 'material-ui/IconButton';
import { FloatButton, Card, CardText, GridList, GridTile, Subheader} from 'material-ui';
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
          height: 350,
          overflowY: 'auto',
        },
    };
    const tilesData = [
        {
          img: 'images/grid-list/00-52-29-429_640.jpg',
          title: 'Breakfast',
          author: 'jill111',
        },
        {
          img: 'images/grid-list/burger-827309_640.jpg',
          title: 'Tasty burger',
          author: 'pashminu',
        },
        {
          img: 'images/grid-list/camera-813814_640.jpg',
          title: 'Camera',
          author: 'Danson67',
        },
        {
          img: 'images/grid-list/morning-819362_640.jpg',
          title: 'Morning',
          author: 'fancycrave1',
        },
        {
          img: 'images/grid-list/hats-829509_640.jpg',
          title: 'Hats',
          author: 'Hans',
        },
        {
          img: 'images/grid-list/honey-823614_640.jpg',
          title: 'Honey',
          author: 'fancycravel',
        },
        {
          img: 'images/grid-list/vegetables-790022_640.jpg',
          title: 'Vegetables',
          author: 'jill111',
        },
        {
          img: 'images/grid-list/water-plant-821293_640.jpg',
          title: 'Water plant',
          author: 'BkrmadtyaKarki',
        },
      ];
    function containerWidth() {
        if (screen.width < 768)
            return 1
        else if (screen.width > 768)
            return 5
        else 
            return 2
    }
    return (
        <div style={styles.root}>
            <GridList
              cellHeight={120}
              style={styles.gridList}
              cols={containerWidth()}
            >
                <Subheader>December</Subheader>
                {tilesData.map((tile) => (
                    <GridTile
                      key={tile.img}
                      title={tile.title}
                      subtitle={<span>by <b>{tile.author}</b></span>}
                      onClick={props.showZoomedImage}
                      actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                    >
                      <img src={tile.img} />
                    </GridTile>
                ))}
            </GridList>
        </div>
    );
}

Gallery.propTypes = {
    showZoomedImage: PropTypes.func.isRequired
};

export default Gallery;