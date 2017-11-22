const storage = require('./plates-storage');
let plates = storage.plates;
let cart = storage.cart;

module.exports = [{
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
},
{
    method: 'GET',  path:'/cart',
    handler: function (request, reply) {
        let cartContents = plates.filter(plate => cart.indexOf(plate._id) != -1);
        return reply(JSON.stringify(cartContents));
    }
},
{
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
}];