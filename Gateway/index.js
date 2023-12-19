const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');

const app = express();

// app.use('/', (req, res) => {
//     return res.json({ "message": "smada link" });
// })
app.use("/customer", proxy('http://localhost:3000'));
app.use("/shopping", proxy('http://localhost:3002'))
app.use("/", proxy('http://localhost:3001'))


app.listen(3003, () => {
    console.log('listening on port 3003');
});