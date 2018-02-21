import {
    LOAD_GALLERY,
    OPEN_ADD_IMAGE_DIALOG,
    CLOSE_ADD_IMAGE_DIALOG,
    LOAD_IMAGE_IN_CAROUSEL,
    OPEN_CAROUSEL,
    CLOSE_CAROUSEL,
    SET_GALLERY_COLS,
    CHANGE_PAGINATION_PAGE
} from "./constants";
import {
    toJS,
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
    isAddImgDialogOpen: false,
    isGalleryCarouselOpen: false,
    gallery: {
        images: [],
        pagination: {
            currentPage: 1,
            pageSize: 5,
            totalPages: 1,
            pagesToDisplay: 5,
            totalRecords: 1,
            currentPageElems: []
        }
    },
    galleryCols: 1
})

export default function galleryReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_GALLERY:
            let gallery = state.get('gallery').toJS();
            gallery.pagination.totalPages = Math.ceil(action.gallery.length / gallery.pagination.pageSize);
            gallery.pagination.totalRecords = action.gallery.length;
            gallery.images = action.gallery;
            let startIndex = 0;
            let endIndex = 0;
            startIndex = ((gallery.pagination.currentPage - 1) * gallery.pagination.pageSize);
            endIndex = (startIndex + gallery.pagination.pageSize);
            gallery.pagination.currentPageElems = action.gallery.slice(startIndex, endIndex);
            return state.set('gallery', fromJS(gallery));
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
        case SET_GALLERY_COLS:
            return state.set('galleryCols', action.galleryCols)
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
        case CHANGE_PAGINATION_PAGE:
        let galleryState = state.get('gallery').toJS();
        if (galleryState.pagination.currentPage === action.page)
            return state;
            galleryState.pagination.currentPage = action.page;
        let pageStartIndex = 0;
        let pageEndIndex = 0;
        pageStartIndex = ((galleryState.pagination.currentPage - 1) * galleryState.pagination.pageSize);
        pageEndIndex = (pageStartIndex + galleryState.pagination.pageSize);
        galleryState.pagination.currentPageElems = galleryState.images.slice(pageStartIndex, pageEndIndex);
        return state.set('gallery', fromJS(galleryState));
        break;
        default:
            return state;
            break;
    }
}