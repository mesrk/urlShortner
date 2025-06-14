const { CHARSET } = require("./enums");

const generateShortCode = (length = 6) => {
    let shortCode = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * CHARSET.length);
        shortCode += CHARSET[randomIndex];
    }
    return shortCode;
}

module.exports = generateShortCode;