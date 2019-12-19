function processData(data){
    //work on the data
    data.push(1)
    
    //return the data
    postMessage(data)
}

onmessage = function(e) {
    processData(e.data);
}