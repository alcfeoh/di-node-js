const Hapi = require('hapi');
const fs = require('fs');
const Boom = require('boom');

let plates = JSON.parse(outputFile());
let cart = [];

// Create a server with a host and port
const server = new Hapi.Server({
    debug: { request: ['error'] },
    connections: {
        routes: {cors: true}
    }
});
server.connection({ host: 'localhost', port: 8000 });

server.route({
    method: 'GET',  path:'/data',
    handler: function (request, reply) {
        return reply(JSON.stringify(plates));
    }
});

server.route({
    method: 'PUT',  path:'/cart/{id}',
    config: {
        validate: {
            params: (params, options, next) => {
                let idExists = plates.find(plate => plate._id == params.id);
                next(! idExists);
            }
        }
    },
    handler: function (request, reply) {
        cart.push(request.params.id);
        console.log(cart);
        return reply(request.params.id + ' added to the cart');
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

