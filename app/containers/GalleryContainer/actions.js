import { LOAD_GALLERY } from './constants';
export function loadGallery() {
    return new Promise((resolve, reject) => {

        let resolveObj = {
            type: LOAD_GALLERY
        };
        resolve(resolveObj);
    })
    
}