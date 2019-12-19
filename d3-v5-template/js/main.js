// SVG setup
var margin = {top: 0, right: 0, bottom: 0, left: 0}
var width = window.innerWidth - margin.left - margin.right
var height = window.innerHeight - margin.top - margin.bottom

var data = [];

var svg = d3.select("#vis")
.append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform","translate(" + margin.left + "," + margin.top + ")")


function draw() {

}

function loadData(){
    //load data
    draw()
}

function init(){
    loadData()
}

init();

