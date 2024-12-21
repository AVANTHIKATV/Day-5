var mongoose = require('mongoose');

mongoose.connect("mongodb+srv://avanthi498kakvr:Avanthika@cluster0.8rnfc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
})
