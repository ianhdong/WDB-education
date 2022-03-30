const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

var router = express.Router();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Server Setup

app.use('/', router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.send('Hello World');
});