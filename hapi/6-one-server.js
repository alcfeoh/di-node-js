const Hapi = require('hapi');
const fs = require('fs');
const Boom = require('boom');
const Path = require('path');
const Inert = require('inert');

let plates = JSON.parse(outputFile());
let cart = [];

// Create a server with a host and port
const server = new Hapi.Server({
    debug: { request: ['error'] },
    connections: {
        routes: { cors: true }
    }
});

server.register({
    register: require('inert')
}, (err) => {
    if (err) {
        console.log('Failed loading plugin');
    }
});
server.connection({ host: 'localhost', port: 8000 });

server.route({
    method: 'GET',
    path: '/index.html',
    handler: function (request, reply) {
        reply.file('index.html');
    }
});

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
        return reply(request.params.id + ' added to the cart');
    }
});

server.route({
    method: 'GET',  path:'/cart',
    handler: function (request, reply) {
        let cartContents = plates.filter(plate => cart.indexOf(plate._id) != -1);
        return reply(JSON.stringify(cartContents));
    }
});

server.route({
    method: 'DELETE',  path:'/cart/{id}',
    config: {
        validate: {
            params: (params, options, next) => {
                next(cart.indexOf(params.id) == -1);
            }
        }
    },
    handler: function (request, reply) {
        cart.splice(cart.indexOf(request.params.id), 1);
        return reply(request.params.id + ' removed from the cart');
    }
});

server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: 'lp-store-ui'
        }
    }
});

// Start the server
server.start((err) => {
    console.log('Server running at:', server.info.uri);
});

function outputFile() {
    return fs.readFileSync('../data/plates.json', 'utf8');
}
