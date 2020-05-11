var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var QuartoInstanceSchema = new Schema({
    quarto: { type: Schema.ObjectId, ref: 'quarto', required: true },
    numeroQuarto: { type: Number , required: true},
});

QuartoInstanceSchema
    .virtual('url')
    .get(function() {
        return '/catalog/quartoInstances/' + this._id;
    });

module.exports = mongoose.model('quartoInstance', QuartoInstanceSchema);