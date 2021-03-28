const routes = require('../api')
const express = require('express')
const expressLoader = async function(app){

    app.get('/api/v1/status', (req, res) => { res.status(200).end(); });
    app.head('/api/v1/status', (req, res) => { res.status(200).end(); });
    app.use(express.urlencoded())
    app.use(express.json())
    app.use('/api/v1',routes())
    app.enable('trust proxy');
    return app;
   
}
module.exports = expressLoader