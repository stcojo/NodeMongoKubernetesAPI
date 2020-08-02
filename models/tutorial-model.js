const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Tutorial = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        published: { type: Boolean, required: true },
    }
)

module.exports = mongoose.model('tutorials', Tutorial)
