const fetch = require("node-fetch");

const url = "http://localhost:8000/data";

fetch(url).then(response => {
    response.json().then(json => {
        console.log(json);
    });
})
.catch(error => {
    console.log(error);
});