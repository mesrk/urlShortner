const URL = require("../models/url.model");
const generateShortCode = require("../utils/generateShortCode");
const validateUrl = require("../utils/validateUrl")

const createShortUrl = async (url) => {
    if (!validateUrl(url)) {
        throw new Error('Invalid URL');
    }

    let exists = true;
    let shortCode;

    while (exists) {
        shortCode = generateShortCode();

        exists = await URL.findOne({ shortCode });
    }

    const newEntry = URL.create({ longUrl: url, shortCode });
    return newEntry;
}

const getFullURL = async (shortCode) => {
    const urlEntry = await URL.findOne({ shortCode });
    if (!urlEntry) {
        return res.status(404).json({
            success: false,
            message: 'URL not found'
        });
    }
    urlEntry.accessCount += 1;
    await urlEntry.save();
    return urlEntry;
}

module.exports = { createShortUrl, getFullURL };