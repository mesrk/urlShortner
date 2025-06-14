const { createShortUrl, getFullURL } = require('../services/url.service');

const createURLShortener = async (req, res) => {

    const { longUrl } = req.body;

    try {
        const newUrl = await createShortUrl(longUrl);
        return res.status(201).json({
            success: true,
            message: 'Short URL created successfully',
            data: newUrl
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

const getFullUrl = async (req, res) => {

    const { shortCode } = req.params;

    try {
        const urlEntry = await getFullURL(shortCode);
        return res.redirect(urlEntry.longUrl);
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: `something went wrong!, ${e}`,
        })
    }
}

module.exports = { createURLShortener, getFullUrl };