//Import of the mongoose package
const mongoose = require('mongoose');


//Creation of the sauce schema
const sauceSchema = mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    name: { type: String, required: true},
    manufacturer: { type: String, required: true},
    description: { type: String, required: true},
    mainPepper: { type: String, required: true},
    imageUrl: { type: String, required: true},
    heat: { type: Number, required: true},
    likes: { type: Number, default: 0},
    dislikes: { type: Number, default: 0},
    usersLiked: { type: String, default: []},
    usersDisliked: { type: String, default: []}
});

// Export of schema Sauce
module.exports = mongoose.model('Sauce', sauceSchema);