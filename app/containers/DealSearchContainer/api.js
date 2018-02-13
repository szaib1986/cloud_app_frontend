import response from '../../response';
import graph from '../../graph.js';

//calculate the deal time in minutes
function getDealTime(deal) {
    var duration = deal.duration;
    let mins = 0;
    mins += (parseInt(duration.h) * 60);
    mins += parseInt(duration.m);
    return mins;
}

//function to calculate the fastest way to travel
function fastestTravel(data, from, to) {
    //map to be used for calculating the graph shortest path
    //as it only needs key (location) and cost (time duration)
    var map = {};
    //map to contain the full object from deal
    var actualMap = {};

    for (let x = 0; x < data.deals.length; x++) {
        
        let deal = data.deals[x];
        
        if (!map[deal.departure]) {
            map[deal.departure] = {};
            actualMap[deal.departure] = {};
        }
        
        let dealTimeInMins = getDealTime(deal);
        
        let departure = map[deal.departure];
        
        let depart = actualMap[deal.departure];
        
        let arrival = deal.arrival;// + '_' + deal.reference;
        
        if (!departure.hasOwnProperty(arrival) || departure[arrival] > dealTimeInMins) {
            departure[arrival] = dealTimeInMins;
            depart[arrival] = deal;
        }

    }

    var g = new graph(map);

    var path = g.findShortestPath(from, to);

    return finalPath(path, map, actualMap);
    
}

//Helper function to calculate the deal price
function getDealPrice(deal) {
    let cost = parseFloat(deal.cost);
    let discount = parseFloat(deal.discount);
    if (discount > 0)
        cost = cost * (1 - (discount / 100.0));

    return cost;
}

//function to calculate the cheapest way to travel
function cheapestTravel(data, from, to) {
    //map to be used for calculating the graph shortest path
    //as it only needs key (location) and cost (cost with discount)
    var map = {};
    //map to contain the full object from deal
    var actualMap = {};

    for (let x = 0; x < data.deals.length; x++) {
        
        let deal = data.deals[x];
        
        //create object maps to contain full Objects and 
        // location based objects
        if (!map[deal.departure]) {
            map[deal.departure] = {};
            actualMap[deal.departure] = {};
        }
        
        let cost = getDealPrice(deal);
        
        let departure = map[deal.departure];
        
        let depart = actualMap[deal.departure];
        
        let arrival = deal.arrival;// + '_' + deal.reference;
        
        if (!departure.hasOwnProperty(arrival) || departure[arrival] > cost) {
            departure[arrival] = cost;
            depart[arrival] = deal;
        }

    }

    var g = new graph(map);

    //using djikstra algorithm, calculate the shortest path.
    var path = g.findShortestPath(from, to);

    return finalPath(path, map, actualMap);
}

function finalPath(path, map, actualMap) {
    let totalCost = 0,
        finalPath = [],
        totalTime = 0;

    for (let i = 0; i < path.length - 1; i++) {
        //get the step cost
        let cStepCost = map[path[i]][path[i + 1]];
        //get the actual object associated with deal
        let deal = actualMap[path[i]][path[i + 1]];
        
        finalPath.push(deal);
        //calculate deal price
        totalCost += getDealPrice(deal);
        //calculate deal time
        totalTime += getDealTime(deal);
    }


    return {
        path: finalPath,
        totalCost: totalCost,
        totalTime: (parseInt(totalTime / 60) + 'h' + parseInt(totalTime % 60) + 'm')
    };
}


module.exports = {
    loadAllTrips: () => response,
    getUniqueLocations: () => {
        let deals = module.exports.loadAllTrips().deals;
        let locs = [];
        for (let i = 0; i < deals.length; i++) {
            if (locs.indexOf(deals[i].departure) == -1)
                locs.push(deals[i].departure);

            if (locs.indexOf(deals[i].arrival) == -1)
                locs.push(deals[i].arrival);
        }
        return locs;
    },
    calculateShortestPath: (data, from, to, mode) => {
        let path = null;
        switch (mode.toLowerCase()) {
            case "cheapest":
                path = cheapestTravel(data, from, to);
                break;
            case "fastest":
                path = fastestTravel(data, from, to);
                break;
        }
        path['currency'] = data.currency;
        path['mode'] = mode;
        path['from'] = from;
        path['to'] = to;
        return path;
    }
}