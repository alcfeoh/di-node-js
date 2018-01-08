const express = require('express');
const fs = require('fs');
const app = express();
const port = 8000;

let plates = JSON.parse(fs.readFileSync('../data/plates.json', 'utf8'));
let cart = [];

function logErrors(err ,req, res, next){
    console.error(err);
    res.status(404).send('Nothing to see here');
}

// We can serve static content too!
app.use('/data', express.static('../data', {index: 'plates.json'}));

app.put('/cart/:id',(req, resp) => {
    let idExists = plates.find(plate => plate._id == req.params.id);
    if (idExists){
        cart.push(req.params.id);
        console.log(cart);
        return resp.send(req.params.id + ' added to the cart');
    } else {
        throw new Error("Unknown ID: "+ req.params.id);
    }
});

app.get('/cart',(req, resp) => {
    let cartContents = plates.filter(plate => cart.indexOf(plate._id) != -1);
    return resp.send(cartContents);
});

app.delete('/cart/:id',(req, resp) => {
    let idExists = plates.find(plate => plate._id == req.params.id);
    if (idExists){
        cart.splice(cart.indexOf(req.params.id), 1);
        return resp.send(req.params.id + ' removed from the cart');
    } else {
        throw new Error("Unknown ID: "+ req.params.id);
    }
});

// We serve our store UI statically
app.use('/', express.static('../lp-store-ui'));

// Middleware for error handling
app.use(logErrors);

app.listen(port, (err) => {
    console.log(`server listening on ${port}`)
});
