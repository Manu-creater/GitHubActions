
const http = require("http");

function createServer() {

    const server = http.createServer(function(req, res) {

        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.end("Hello from my Node.js server!");

    });

    return server;
}

if (require.main === module) {

    const server = createServer();

    server.listen(3000, function() {
        console.log("Server running on port 3000");
    });

}

module.exports = createServer;
