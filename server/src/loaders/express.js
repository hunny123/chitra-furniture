const routes = require('../api')
const expressLoader = async function(app){
  
    app.get('/api/v1/status', (req, res) => { res.status(200).end(); });
    app.head('/api/v1/status', (req, res) => { res.status(200).end(); });
    app.use('/api/v1',routes())
    app.enable('trust proxy');
    return app;
   
}
module.exports = expressLoader