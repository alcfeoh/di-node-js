const fs = require('fs');

function outputFile(file) {
    return fs.readFileSync(__dirname+ file, 'utf8');
}

let plates = JSON.parse(outputFile('/../data/plates.json'));
let states = JSON.parse(outputFile('/../data/US_states.json'));
let cart = [];

module.exports = {plates: plates, cart: cart, states: states};