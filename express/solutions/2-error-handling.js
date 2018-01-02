const express = require('express');
const app = express();
const port = 8000;

function logErrors(err ,req, res, next){
    console.error(err);
    res.status(404).send('Nothing to see here');
}

app.get('/', (request, resp) => {
    resp.send('<h1>Hello Express World!</h1>')
});

// We can serve static content too!
app.use('/data', express.static('../data', {index: 'plates.json'}));

app.get('*', (request, resp, next) => {
    throw new Error("Unknown URL: "+ request.originalUrl);
});

// Middleware for error handling
app.use(logErrors);

app.listen(port, (err) => {
    console.log(`server listening on ${port}`)
});


