const validateUrl = (url) => {

    try {
        new URL(url);
        return true;
    } catch (e) {
        return false;
    }
}

module.exports = validateUrl;