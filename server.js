// Here we require/import the HTTP module
var http = require("http");

// Here we define a port to listen to
var PORT = 7000;
var PORT2 = 7500;

// Here we create a generic function to handle requests and responses
function handleRequest(request, response) {

  // The below statement is triggered (client-side) when the user visits the PORT URL
  var pharses = ["you're great", "you're the best", "you're a genius"];
  var bad = pharses[Math.floor(Math.random() * pharses.length)];
  response.end(bad + request.url);
  console.log("The good side");
}
function handlebadRequest(request, response) {

  // The below statement is triggered (client-side) when the user visits the PORT URL
  var pharses = ["eat something", "be better", "work harder"];
  var good = pharses[Math.floor(Math.random() * pharses.length)];
  console.log("The bad side");
  response.end(good + request.url);
  console.log("The bad side");
}

// Here we use the Node HTTP package to create our server.
// We then pass it the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);
var server2 = http.createServer(handlebadRequest);

// Here we start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("Server listening on: http://localhost:%s", PORT + " for something good");

});

server2.listen(PORT2, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("Server listening on: http://localhost:%s", PORT2 + " for something bad");

});