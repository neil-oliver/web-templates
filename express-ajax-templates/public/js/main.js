function getResults(){
    var parameters = {};

    $.get( '/server-endpoint',parameters, function(data) {
        $('#data').html(data)
    });
}

function init(){
    getResults()
}

init()