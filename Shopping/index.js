const express = require('express');

const app = express();

app.use('/', (req, res) => {
    return res.json({ "message": "hello from shopping team" });
})

app.listen(3002, () => {
    console.log('listening on port 3002');
});