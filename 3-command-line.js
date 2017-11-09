const fs = require('fs');

let filePath = process.argv[2];

if (filePath) {
    console.log('Listening for file updates on: ', filePath);
    fs.watch(filePath, {encoding: 'buffer'}, (eventType, filename) => {
        console.log('The file has changed');
    });

} else {
    console.error('A file path is required to run this program')
}


