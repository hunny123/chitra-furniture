const expressLoader = async function(app){
  
    app.get('/api/v1/status', (req, res) => { res.status(200).end(); });
    app.head('/api/v1/status', (req, res) => { res.status(200).end(); });
    app.enable('trust proxy');
    return app;
   
}
module.exports = expressLoader