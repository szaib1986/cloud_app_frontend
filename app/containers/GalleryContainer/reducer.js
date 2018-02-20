import { LOAD_GALLERY } from "./constants";
import {
    fromJS
} from 'immutable';

const initialState = fromJS({
    selectedImage: {
    },
    pageIndex: 1,
    totalPages: 1,
    gallery: []
})

export default function galleryReducer(state = initialState, action) {
    switch (action.type) {
       case LOAD_GALLERY:
            return state;
       break;
        default:
            return state;
            break;
    }
}