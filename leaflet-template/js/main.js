
let markers;

function setupMap(){
    // create your own map
    mymap = L.map('map',{
        center: [40.7831, -73.9712],
        zoom: 3,
        zoomControl: false
    });

    L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'dark-v10',
        maxZoom: 10,
        minZoom: 3,
        accessToken: 'pk.eyJ1Ijoib2xpdm44OTciLCJhIjoiY2szNmx0dHZqMDA0YzNibnpmem1sM25tOCJ9.lkY_8AlzmT_xunxlmXQYDg'
    }).addTo(mymap);

    mymap.scrollWheelZoom.disable()

    //add zoom control with your options
    L.control.zoom({
        zoom:3,
        position:'topright'
    }).addTo(mymap);

    
    markers = L.layerGroup().addTo(mymap);

}

function init(){
    setupMap()
}

init()


  