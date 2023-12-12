const express = require('express');

const app = express();

app.use('/', (req, res) => {
    return res.json({ "message": "hello from Products" });
})

app.listen(3001, () => {
    console.log('listening on port 3001');
});