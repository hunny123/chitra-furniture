const { Router } = require('express')
const route = Router();

const Product = (app) => {
  app.use('/product', route);
  
  route.get('/list',(req, res) => {
    return res.json({ product:[{name:"hi",id:"hello"}] }).status(200);
  });
};
module.exports = Product;