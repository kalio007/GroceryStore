const express = require('express');

const app = express();

app.use('/', (req, res) => {
    return res.json({ "message": "hello from Customer" });
})

app.listen(3000, () => {
    console.log('listening on port 3000');
});