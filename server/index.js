require ('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller')

const app = express();

app.use(bodyParser.json());

app.use(express.static(`${__dirname}/../build`));

const { SERVER_PORT, CONNECTION_STRING } = process.env

massive(CONNECTION_STRING)
    .then(dbInstance => {
        app.set("db", dbInstance);
    })
    .catch(err => console.log(err));

app.get('/api/houses', controller.getAllHouses);
app.post('/api/house/add', controller.createHouse);
app.delete('/api/house/:id', controller.deleteHouse);



app.listen(SERVER_PORT, () => {
    console.log(`Eavesdropping on Port ${SERVER_PORT}`);
})