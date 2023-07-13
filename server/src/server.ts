import express from 'express';

const app = express();
const cors = require('cors');
const {sequelize} = require('./models')
const config = require('./config/config')

app.use(cors());

require('routes')(app)

sequelize.sync()
    .then(() => {
        app.listen(config.port)
        console.log('HTTP Server running!');
    })