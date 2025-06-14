const mongoose = require("mongoose");
const { v4: uuid4 } = require("uuid");

const Schema = mongoose.Schema;

const UrlSchema = new Schema({
    _id: {
        type: String,
        default: uuid4,
    },
    longUrl: {
        type: String,
        required: true,
    },
    shortCode: {
        type: String,
        required: true,
        unique: true,
    },
    expirationDate: {
        type: Date,
        default: Date.now() + 30 * 24 * 60 * 60 * 1000, // Default to 30 days from now
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    accessCount: {
        type: Number,
        default: 0,
    },
});

const URL = mongoose.model('UrlSchema', UrlSchema);

module.exports = URL;