const MongoClient = require('mongodb').MongoClient;
const plates = require('./data/plates.json');

var db, dbClient;

// Connection URL
const url = 'mongodb://localhost:27017';
const dbName = 'license-plates';
const plateCollection = 'plates';
const cartCollection = 'cart';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
    console.log("Connected successfully to server");
    dbClient = client;
    db = client.db(dbName);
});

const insertAllPlates = function(callback) {
    // Get the documents collection
    const collection = db.collection(plateCollection);
    // Insert some documents
    collection.insertMany(plates, function(err, result) {
        console.log(`Inserted ${plates.length} documents into plates`);
        callback(result);
    });
};

const findAllPlates = function(callback){
    // Get the documents collection
    const collection = db.collection(plateCollection);
    // Find some documents
    collection.find({}).toArray(function(err, docs){
        callback(docs);
    });
};

const addPlateToCart = function(plate, callback) {
    const collection = db.collection(cartCollection);
    collection.insertMany([ plate ], function(err, result) {
        console.log(`[Cart] Added plate ${plate._id} to the cart`);
        callback(result);
    });
};

const getCartContents = function(callback){
    const collection = db.collection(cartCollection);
    collection.find({}).toArray(function(err, docs){
        callback(docs);
    });
};

const removePlateFromCart = function(plateId, callback) {
    const collection = db.collection(cartCollection);
    collection.deleteOne({ _id : plateId }, function(err) {
        console.log(`[Cart]Removed the plate with id ${plateId}`);
        callback(result);
    });
};

modules.export = {
    plates, findAllPlates, addPlateToCart, getCartContents, removePlateFromCart
};