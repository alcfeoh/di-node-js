const express = require('express');
const app = express();
const port = 8000;

app.get('/', (request, resp) => {
    resp.send('<h1>Hello Express World!</h1>')
});

// We can serve static content too!
app.use('/data', express.static('../data', {index: 'plates.json'}));

app.get('*', (request, resp) => {
    resp.send('<h1>Nothing to see here</h1>')
});

app.listen(port, (err) => {
    console.log(`server listening on ${port}`)
});
