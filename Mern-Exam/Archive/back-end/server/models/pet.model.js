const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
    name : {
        type: String,
        minLength:[3, "You need at least 3 characters!"],
        required:[true, "you need a pet name!"]
        
    },
    type: {
        type: String,
        minLength:[3, "You need at least 3 characters!"],
        required:[true, "You need to add a type!"]
        
    },
    desc : {
        type: String,
        minLength:[3, "You need at least 3 characters!"],
        required:[true, "You need to add a description!"]
        
    },
    skill1 : String,
    skill2: String,
    skill3: String
}, {timestamps:true});

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;
