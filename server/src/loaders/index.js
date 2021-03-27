const expressLoader = require('./express')
const swaggerLoader = require('./swaggerLoader')
const mySQL = require ('./mysqlLoader')
const loaders = async  ( expressApp ) => { 
  await mySQL()
  await expressLoader(expressApp );
  console.log('Express Intialized');
  await swaggerLoader(expressApp)
  console.log('swagger Intialized');
  // ... more loaders can be here
} 
module.exports = loaders