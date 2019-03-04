let express = require('express');

let glasovi = [0, 0, 0, 0];

let server = express();

server.use (express.json());
server.use (express.static('./client'));

server.post('/vote', (req, res) => {
    let data = req.body;
    let polBr = data.politicarId
    glasovi[polBr]++;
    console.log(glasovi);
    res.send("OK");
});

server.listen(4000);