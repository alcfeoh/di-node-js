const express = require('express');
const fs = require('fs');
var cors = require('cors');
const app = express();
const port = 8000;

let plates = JSON.parse(fs.readFileSync('../data/plates.json', 'utf8'));
let cart = [];

// Enabling CORS
app.use(cors());

function logErrors(err ,req, res, next){
    console.error(err);
    res.status(404).send('Nothing to see here');
}

app.get('/', (request, resp) => {
    resp.send('<h1>Hello Express World!</h1>')
});

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


app.get('*', (request, resp, next) => {
    throw new Error("Unknown URL: "+ request.originalUrl);
});

// Middleware for error handling
app.use(logErrors);

app.listen(port, (err) => {
    console.log(`server listening on ${port}`)
});



