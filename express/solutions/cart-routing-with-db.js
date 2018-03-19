const express = require('express');
var router = express.Router();
let db = require('./mongo,js');

router.put('/:id', (request, resp) => {
    let id = request.params.id;
    let foundPlate = db.plates.find((plate) => plate._id == id);
    if (foundPlate) {
        db.addPlateToCart(foundPlate, () => resp.send(`${id} was added to the cart`));
    } else {
        throw new Error(`Plate ${id} does not exist`);
    }
});

router.delete('/:id', (request, resp) => {
    let id = request.params.id;
    db.removePlateFromCart(id, () => resp.send(`${id} was removed to the cart`));
});

router.get('/', (request, resp) => {
    db.getCartContents((cart) => resp.send(cart));
});

module.exports = router;