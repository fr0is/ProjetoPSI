var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CartaoMBSchema = new Schema({
    númeroDoCartao: { type: Number, required: true, min: 12, max: 12 },
    prazo: { type: String, required: true, min: 5, max: 5 },
    cvv: { type: Number, required: true, min: 3, max: 3 },
    userEmail: { type: String }
});

CartaoMBSchema
    .virtual('url')
    .get(function() {
        return '/catalog/user/cartaoMB/' + this._id;
    });

module.exports = mongoose.model('cartaoMB', CartaoMBSchema);