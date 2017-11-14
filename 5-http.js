const http = require('http');
const fs = require('fs');
const port = 8000;

const server = http.createServer((request, response) => {
    if (request.url == '/hello')
        response.end('Hello Node.js Server!');
    else if (request.url == '/data')
        outputFile(response);
    else
        response.end('Nothing to see here');
});

server.listen(port, (err) => {
    console.log(`server is listening on ${port}`)
});

function outputFile(response) {
    fs.readFile('data/persons.json', 'utf8', function(err, contents) {
        response.end(contents);
    });
}



