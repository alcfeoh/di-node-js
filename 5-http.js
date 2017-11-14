const http = require('http');
const port = 8000;

const server = http.createServer((request, response) => {
    if (request.url == '/hello')
        response.end('Hello Node.js Server!');
    else if (request.url == '/bye')
        response.end('Bye bye Node.js Server!');
    else
        response.end('Nothing to see here');
});

server.listen(port, (err) => {
    console.log(`server is listening on ${port}`)
});



