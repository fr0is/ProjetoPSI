var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UtilizadorSchema = new Schema({
    nome: { type: String, required: true, min: 3, max: 100 },
    email: { type: String, required: true, min: 3, max: 100, unique: true },
    password: { type: String, required: true, min: 3, max: 100 },
    reservas: [{ type: Schema.ObjectId, ref: 'reserva' }]
});

UtilizadorSchema
    .virtual('url')
    .get(function() {
        return '/catalog/utilizador/' + this._id;
    });

module.exports = mongoose.model('utilizador', UtilizadorSchema);