/*
var http = require('http')

http.createServer((req, res) => {
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.end("Hello World start\n");
}).listen(process.env.PORT);
*/

// create an express app
const express = require("express");
const app = express();

// use the express-static middleware
// app.use(express.static("public"));

// define the first route
app.get("/", (req, res) => {
	res.send("<h1>/ World! github</h1>");
});

app.get("/api", (req, res) => {
	res.send("<h1>api World! github</h1>");
});

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));

