const Hapi = require('hapi');
const fs = require('fs');
const Boom = require('boom');

// Create a server with a host and port
const server = new Hapi.Server({ debug: { request: ['error'] } });
server.connection({ host: 'localhost', port: 8000 });

// Add the routes
server.route({
    method: 'GET',  path:'/hello',
    handler: function (request, reply) {
        return reply('Hello Hapi World!');
    }
});

server.route({
    method: 'GET',  path:'/data',
    handler: function (request, reply) {
        return reply(outputFile());
    }
});

server.route({
    method: 'GET',  path:'/{p*}',
    handler: function (request, reply) {
        request.log(['error', 'bad_request'], request.url.pathname);
        return reply(Boom.notFound('Nothing to see here'));
    }
});

// Start the server
server.start((err) => {
    console.log('Server running at:', server.info.uri);
});

function outputFile() {
    return fs.readFileSync('../data/plates.json', 'utf8');
}
