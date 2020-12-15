const expressLoader = async function(app){
  
    app.get('/status', (req, res) => { res.status(200).end(); });
    app.head('/status', (req, res) => { res.status(200).end(); });
    app.enable('trust proxy');

    // app.use(cors());
    // app.use(require('morgan')('dev'));
    // app.use(bodyParser.urlencoded({ extended: false }));

    // ...More middlewares

    // Return the express app
    return app;
   
}
module.exports = expressLoader