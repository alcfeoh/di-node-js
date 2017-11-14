const express = require('express');
const app = express();
const port = 8000;

app.get('/hello', (request, response) => {
    response.send('<h1>Hello Express Server!</h1>')
});

app.use('/data', express.static('data', {index: 'persons.json'}));

app.use('/static', express.static('static-content'));

app.get('*',function (req, res) {
    res.send('<h1>Nothing to see here</h1>');
});

app.listen(port, (err) => {
    console.log(`server is listening on ${port}`)
});


