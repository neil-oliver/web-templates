var fs = require('fs');
var async = require('async');
    
function process(){
    var newdata = {};

    //load file
    fs.readFile('data.json', (error, data) => {
        if (error) console.log(error);
        data = JSON.parse(data);
                    
        // start looping through each object
        async.eachSeries(data, function(value, callback) {

            setTimeout(callback, 0);
        }, function() {
            // write the created file
            fs.writeFileSync('newdata.json', JSON.stringify(newdata));

        });
    });

}

//////////////////////////////////////////////////////////
process();


