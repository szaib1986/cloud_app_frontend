import { LOAD_GALLERY, OPEN_ADD_IMAGE_DIALOG, CLOSE_ADD_IMAGE_DIALOG, LOAD_IMAGE_IN_CAROUSEL, OPEN_CAROUSEL, CLOSE_CAROUSEL } from './constants';
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

export function loadImageCarousel(imageId) {
    return api.loadImageById(imageId).then(selectedImage => {
        return {
            type: LOAD_IMAGE_IN_CAROUSEL,
            selectedImage
        }
    });
}