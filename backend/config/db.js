const mongoose = require('mongoose');
async function main() {
  await mongoose.connect('mongodb+srv://admin:admin123@urlshortner.njxjn72.mongodb.net/?retryWrites=true&w=majority&appName=urlShortner');
}

module.exports = main;