import { LOAD_TRIPS_SUCCEEDED, SET_UNIQUE_LOCATIONS, SET_SEARCHDEAL_FORM, GET_SEARCH_FORM } from './constants';
import promiseMiddleware from "redux-promise";
import api from '../api';
export function loadTrips() {
    return {
        type: LOAD_TRIPS_SUCCEEDED,
        allTrips: api.loadAllTrips()
    }
}

export function loadUniqueLocations(){
    let uniqueLocs = api.getUniqueLocations();
    return {
        type: SET_UNIQUE_LOCATIONS,
        uniqueLocs
    }
}

export function setSearchDealFormValue(value, valueKey){
    return {
        type: SET_SEARCHDEAL_FORM,
        payLoad: {
            value,
            valueKey: valueKey
        }
    }
}

export function getSearchForm(cb){
    return {
        type: GET_SEARCH_FORM,
        cb
    }
}




