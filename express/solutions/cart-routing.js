var express = require('express');
var router = express.Router();
const data = require('./data-models');
let plates = data.plates;
let cart = data.cart;

router.put('/:id',(req, resp) => {
    let idExists = plates.find(plate => plate._id == req.params.id);
    if (idExists){
        cart.push(req.params.id);
        console.log(cart);
        return resp.send(req.params.id + ' added to the cart');
    } else {
        throw new Error("Unknown ID: "+ req.params.id);
    }
});

router.get('/',(req, resp) => {
    let cartContents = plates.filter(plate => cart.indexOf(plate._id) != -1);
    return resp.send(cartContents);
});

router.delete('/:id',(req, resp) => {
    let idExists = plates.find(plate => plate._id == req.params.id);
    if (idExists){
        cart.splice(cart.indexOf(req.params.id), 1);
        return resp.send(req.params.id + ' removed from the cart');
    } else {
        throw new Error("Unknown ID: "+ req.params.id);
    }
});

module.exports = router;