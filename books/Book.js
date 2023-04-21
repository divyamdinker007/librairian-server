const { Schema } = require("mongoose");
const { model } = require("mongoose");

const bookSchema = Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        },
    description: String
})

module.exports = model('Book', bookSchema)