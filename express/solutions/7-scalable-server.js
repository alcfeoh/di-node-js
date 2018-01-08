const express = require('express');
const cartRoutes = require('./cart-routing');
const data = require('./data-models');

const app = express();
const port = 8000;

let plates = data.plates;

function logErrors(err ,req, res, next){
    console.error(err);
    res.status(404).send('Nothing to see here');
}

app.use('/data', (req, resp) => {
    return resp.send(plates);
});

app.use('/cart', cartRoutes);

// We serve our store UI statically
app.use('/', express.static('../../lp-store-ui'));

// Middleware for error handling
app.use(logErrors);

app.listen(port, (err) => {
    console.log(`server listening on ${port}`)
});
