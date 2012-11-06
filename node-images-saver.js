var http = require("http"),
  fs = require("fs"),
  path = require('path'),
  querystring = require('querystring');

function save(name, data, callback){
  console.log("Saving image to", name, "…");
  
  var buffer = new Buffer(
    data.replace(/^data:image\/\w+;base64,/, ""), 
    'base64'
  );

  fs.writeFile(name, buf, callback);
}

function server(directory, port){

  if (!fs.existsSync(directory)){
    console.error("ERROR: Path does not exist:", directory);
    return;
  }

  console.log("Listening on port:", port);
  console.log("Target directory:", path.resolve(directory));

  return http.createServer(function(request, response){
    handle(request, response, directory);
  }).listen(port);
}

function handle(request, response, directory) {

  var body = "";

  request.on('data', function(data) {
    body += data;
  });

  request.on('end', function(){
    
    var params = querystring.parse(body),
      name = path.resolve(directory, params.name),
      data = params.data;

    function respond(error){
      response.writeHead(200, {
        'Access-Control-Allow-Origin' : '*'
      });
      response.end();
    }

    save(name, data, respond);
  });
}

exports.createServer = server;
exports.save = save;

