const Hapi = require('hapi');
const Boom = require('boom');
const Path = require('path');
const Inert = require('inert');
const cartRoutes = require('./cart-routes');
const storage = require('./plates-storage');

// Create a server with a host and port
const server = new Hapi.Server({
    debug: { request: ['error'] }
});

server.register({
    register: require('inert')
}, (err) => {
    if (err) {
        console.log('Failed loading plugin');
    }
});
server.connection({ host: 'localhost', port: 8000 });

server.route(cartRoutes);

server.route({
    method: 'GET',  path:'/data',
    handler: function (request, reply) {
        return reply(JSON.stringify(storage.plates));
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


