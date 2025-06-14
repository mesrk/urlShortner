const router = require('express').Router();
const { createURLShortener, getFullUrl } = require('../controller/url.controller');

router.post('/create', createURLShortener);
router.get('/:shortCode', getFullUrl);

module.exports = router;