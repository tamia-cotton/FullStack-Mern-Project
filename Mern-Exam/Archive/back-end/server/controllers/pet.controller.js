const Pet = require('../models/Pet.model');

module.exports.findAll = (req, res) => {
    Pet.find()
        .then(allPets => res.json({ Pets: allPets }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findOnePet = (req, res) => {
    Pet.findOne({ _id: req.params._id })
        .then(onePet => res.json({ Pet: onePet }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createPet = (req, res) => {
    Pet.create(req.body)
        .then(newPet => res.json({ Pet: newPet }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updatePet = (req, res) => {
    Pet.findOneAndUpdate(
        { _id: req.params._id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedPet => res.json({ Pet: updatedPet }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.delete = (req, res) => {
    Pet.deleteOne({ _id: req.params._id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
