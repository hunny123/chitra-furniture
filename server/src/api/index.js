const { Router } = require('express')
const Product = require('./Routes/product')


const API = ()=>{ 
  const app = Router()
  Product(app)
  return app
}
module.exports =API