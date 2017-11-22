const fs = require('fs');

function outputFile() {
    return fs.readFileSync('../data/plates.json', 'utf8');
}

let plates = JSON.parse(outputFile());
let cart = [];

module.exports = {plates: plates, cart: cart};