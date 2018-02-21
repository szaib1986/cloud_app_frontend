import {
    LOAD_GALLERY,
    OPEN_ADD_IMAGE_DIALOG,
    CLOSE_ADD_IMAGE_DIALOG,
    LOAD_IMAGE_IN_CAROUSEL,
    OPEN_CAROUSEL,
    CLOSE_CAROUSEL,
    SET_GALLERY_COLS,
    CHANGE_PAGINATION_PAGE
} from './constants';
import api from './api';
export function loadGallery() {
    return api.loadAll().then(gallery => {
        return {
            type: LOAD_GALLERY,
            gallery
        };
    })
}

export function openImageAddDialog() {
    return {
        type: OPEN_ADD_IMAGE_DIALOG
    }
}

export function closeDialog() {
    return {
        type: CLOSE_ADD_IMAGE_DIALOG
    }
}

export function saveImage(imageData) {
    return api.saveImage(imageData).then(savedImage => {
        return loadGallery();
    })
}

export function openCarousel() {
    return {
        type: OPEN_CAROUSEL
    }
}
export function closeCarousel() {
    return {
        type: CLOSE_CAROUSEL
    }
}

export function loadImageCarousel(imageId = null) {
    return api.loadImageById(imageId).then(selectedImage => {
        return {
            type: LOAD_IMAGE_IN_CAROUSEL,
            selectedImage
        }
    });
}

export function setGalleryColumns() {
    let galleryCols = 2;
    let width = window.innerWidth;

    if (width < 768)
        galleryCols = 1;
    else if (width > 768)
        galleryCols = 6;

    return {
        type: SET_GALLERY_COLS,
        galleryCols
    }
}

export function changePage(page) {
    return {
        type: CHANGE_PAGINATION_PAGE,
        page
    }
}

export function deleteImage(imgId, dispatch) {
    return api.deleteImage(imgId).then(gallery => {

        //also dispatch function to reload gallery
        dispatch(loadGallery())

        if (gallery.length == 0)
            dispatch(closeCarousel());
        else {
            dispatch(loadImageCarousel(null));
            return {
                type: LOAD_GALLERY,
                gallery
            }
        }
    })
}