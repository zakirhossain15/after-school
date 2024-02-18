const mongoose = require("mongoose");

const uri = 'mongodb+srv://zakir:zakir@cluster0.jc5w46u.mongodb.net/collectionstore';

mongoose
    .connect(uri)
    .then(() => {
        console.log("Connected to the Database");
    })
    .catch((error) => {
        console.log(`Error: ${error}`);
    });

