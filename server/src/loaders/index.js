const expressLoader = require('./express')
   const loaders = async  ( expressApp ) => {
    
    await expressLoader(expressApp );
    
    console.log('Express Intialized');

    // ... more loaders can be here
  }
module.exports = loaders