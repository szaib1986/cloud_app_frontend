import { LOAD_GALLERY, OPEN_ADD_IMAGE_DIALOG, CLOSE_ADD_IMAGE_DIALOG, LOAD_IMAGE_IN_CAROUSEL, OPEN_CAROUSEL, CLOSE_CAROUSEL } from "./constants";
import {
    fromJS
} from 'immutable';

const initialState = fromJS({
    selectedImage: {
        id: '',
        src: '',
        createdDate: '',
        index: -1,
        prevImageId: null,
        nextImageId: null
    },
    pageIndex: 1,
    totalPages: 1,
    isAddImgDialogOpen: false,
    isGalleryCarouselOpen: false,
    gallery: [],
})

export default function galleryReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_GALLERY:
        
            return state.set('gallery', action.gallery);
            break;
        case OPEN_ADD_IMAGE_DIALOG:
            return state.set('isAddImgDialogOpen', true);
            break;
        case CLOSE_ADD_IMAGE_DIALOG:
            return state.set('isAddImgDialogOpen', false);
            break;
        case OPEN_CAROUSEL:
            return state.set('isGalleryCarouselOpen', true)
        break;
        case CLOSE_CAROUSEL:
            return state.set('isGalleryCarouselOpen', false)
        break;
        case LOAD_IMAGE_IN_CAROUSEL:
            let selectedImage = state.get('selectedImage').toJS();
            selectedImage.id = action.selectedImage.id;
            selectedImage.src = action.selectedImage.src;
            selectedImage.createdDate = action.selectedImage.createdDate;
            selectedImage.index = action.selectedImage.index;
            selectedImage.prevImageId = action.selectedImage.prevImageId;
            selectedImage.nextImageId = action.selectedImage.nextImageId;
            return state.set('selectedImage', fromJS(selectedImage));
            break;
        default:
            return state;
            break;
    }
}