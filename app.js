const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Quote generator');
});

app.listen(3000, () => {
    console.log('Working ok http://localhost:3000');
});

