// Express Setup
var express = require('express');
var app = express();

////////////////////////////////////////////////////////////////////////////////
// express setup
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

app.use(express.static('public'));

app.get('/server-endpoint', async function (req, res) {

  var data = processData(req.query)
  res.send(data)

});

function processData(params){
  var newData;
  return new Promise(resolve => {
      resolve(newData) 
  });
}

