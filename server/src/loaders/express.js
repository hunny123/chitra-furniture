const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger');
const expressLoader = async function(app){
  
    app.get('/api/v1/status', (req, res) => { res.status(200).end(); });
    app.head('/api/v1/status', (req, res) => { res.status(200).end(); });
    app.enable('trust proxy');
    app.use('/api/v1/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    // app.use(cors());
    // app.use(require('morgan')('dev'));
    // app.use(bodyParser.urlencoded({ extended: false }));

    // ...More middlewares

    // Return the express app
    return app;
   
}
module.exports = expressLoader