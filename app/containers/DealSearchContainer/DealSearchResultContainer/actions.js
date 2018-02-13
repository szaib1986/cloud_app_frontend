import { SEARCH_DEAL } from './constants';
import api from '../api';
import { getSearchForm } from '../FormContainer/actions';
import graph from '../../../graph.js';


///Search the deal based on the parameters set
//if parameters are not set, then go back to Deal Search page
export function searchDeal(dispatch) {
    return new Promise((resolve, reject) => {
        dispatch(getSearchForm(function (dealsData, searchFormParams) {
            if (searchFormParams.From == '-1' || searchFormParams.To == '-1')
                window.location.href = '/'
            resolve(searchDealResult(dispatch, dealsData, searchFormParams));
        }));

    })
}

//Callback function of getting the search deal form params state
function searchDealResult(dispatch, dealsData, searchFormParams) {

    //calculate shortest path
    let path = api.calculateShortestPath(dealsData, searchFormParams.From, searchFormParams.To, searchFormParams.DealMode);
    return {
        type: SEARCH_DEAL,
        searchResult: path
    }
}






