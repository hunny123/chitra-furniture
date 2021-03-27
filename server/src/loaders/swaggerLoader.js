const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../config/swagger');
const swaggerLoader = async function(app){
    app.use('/api/v1/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    return app;
   // swagger initialization
}
module.exports = swaggerLoader