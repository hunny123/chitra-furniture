const express = require('express');
const loaders = require('./src/loaders')
const startServer =async()=>
{
    const app = express();
    const port = process.env.PORT ||5000
    await loaders(app );
    
    
    app.listen(port, (err) => 
    {
        if(err){
        console.log(err)
        return
    }
    console.log(`server is running on ${port}`)})
}
startServer()
