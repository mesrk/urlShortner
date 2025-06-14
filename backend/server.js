const express = require('express');
const mongoDBConnection = require('./config/db');

router = require('./routes/url.route');

const app = express();
const port = 5000;


mongoDBConnection().then(() => {
    console.log('DATABASE Connected!');
}).catch(err => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);

app.listen(port, () => {
    console.log('SERVER HAS STARTED ON, ', port);
})