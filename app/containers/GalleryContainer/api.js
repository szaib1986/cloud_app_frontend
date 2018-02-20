// class responsible for getting images
import _ from 'lodash';
import globalApi from '../../api';
let api = {
    //Load Images by PageIndex
    loadAll: () => {
        return new Promise((resolve, reject) => {
            let gallery = localStorage.getItem('gallery');
            if (gallery)
                return resolve(JSON.parse(gallery));
            return resolve([])
            return reject('Error occurred')
        })
    },
    saveImage: imageDataUrl => {
        return api.loadAll()
            .then(gallery => {
                //Mock Image Data
                let imgObj = {
                    id: globalApi.generateId(6),
                    src: imageDataUrl,
                    createdDate: new Date()
                };
                gallery.push(imgObj);
                //set gallery back to localStorage
                localStorage.setItem('gallery', JSON.stringify(gallery));
                return imgObj;
            });
    },
    loadImageById: imageId => {
        return api.loadAll()
            .then(gallery => {
                let image = _.find(gallery, { id: imageId })
                let index = gallery.indexOf(image);
                image['index'] = index;
                if (index == 0)
                    image['prevImageId'] = null;
                else
                    image['prevImageId'] = gallery[index - 1].id;

                if (index == (gallery.length - 1))
                    image['nextImageId'] = null;
                else
                    image['nextImageId'] = gallery[index + 1].id;
                    
                return image;
            })

    }
}

export default api;