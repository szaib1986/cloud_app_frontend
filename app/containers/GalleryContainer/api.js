// class responsible for getting images
export default api = {
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
        api.loadAll()
            .then(gallery => {
                let imgObj = {
                    id: '',
                    src: imageDataUrl,
                    createdDate: new Date()
                };
                gallery.push(imgObj);
                return imgObj;
            });
    },
    loadImageById: imageId => {

    }
}