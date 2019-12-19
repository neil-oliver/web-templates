var w;
var data = [];

function startWorker(searchTerm,metObjects,list) {

  if (typeof(Worker) !== "undefined") {
    w = new Worker("./js/worker.js");
    w.postMessage(data)
    w.onmessage = function(event) {
        console.log(event.data)
    };
  } else {
    console.log("Sorry! No Web Worker support.");
  }
}


function init(){
    startWorker()
}

init();

