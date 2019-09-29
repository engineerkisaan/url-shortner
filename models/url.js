const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
    urlCode: String,
    longUrl: String,
    shortUrl: String
},{
    timestamps: true,
    strict: true
})

module.exports = mongoose.model('Url', urlSchema);