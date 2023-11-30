// app.js

const express = require('express');
const app = express ();
const port = 3000;

app.get('/', (req, res) => {

    res.send('TEST APPLICATION BLUE GREEN DEPLOYMENT [V-2.1 Dated 01/12/2023]');
});

app.listen(port, () => {

    console.log('Server is listening at http://localhost:${port}');
});
