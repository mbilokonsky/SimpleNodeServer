var app = module.exports = require("express").createServer();

app.get("/", function(request, response) {
	response.end("This is myk's other test server!");
});

app.listen(80);