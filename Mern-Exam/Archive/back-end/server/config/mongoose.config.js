const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pet-shelter', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database, yay!'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));