// write your code here
const http = require('http');
const port = 8080;

const server = http.createServer((req, res) => {
//log message to console
    console.log('Request ' + req.method + ' request for: ' + req.url);
    //send headers
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    //send body response
    res.end('Hello World');
});

server.listen(port, 'localhost', null, () => {
    //log message to console
    console.log(`Server running at http://localhost:${port}/`);
});