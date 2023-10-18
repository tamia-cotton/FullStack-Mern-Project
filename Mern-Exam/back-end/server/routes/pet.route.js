const Pet = require('../controllers/Pet.controller');

module.exports = app => {
    app.get("/api/Pet", Pet.findAll);
    app.post("/api/Pet/new", Pet.createPet);
    app.patch("/api/Pet/update/:_id", Pet.updatePet);
    app.delete("/api/Pet/delete/:_id", Pet.delete);
    app.get("/api/Pet/:_id", Pet.findOnePet);
}