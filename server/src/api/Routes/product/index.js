const { Router } = require('express')
const ProductModel = require('../../../models/productModel')
const {getRequestPaginationObj,getResponsePaginationObj} = require('../../../Utility/pagination')
const { productListFilters } = require('./productFilters')
const  getFilters  = require("../../../Utility/filter") 
const route = Router();


const Product = (app) => {
  app.use('/product', route);
  route.get('/product-info', async (req, res) => {
    const { id } = req.query
   
    try {
      const productModel = await ProductModel()
      const productInfo = await productModel.findAll({
        where: {
          id: id,
        },
       
      })
      return res.json({product:productInfo}).status(200)
    }
    catch (err) {
      return res.json({msg:"fetching fails" ,actual: err.msg}).status(502)
    }
  })
  //list api
  route.get('/list', async (req, res) => {
    const paginationOption = getRequestPaginationObj(req)
    const productFilters = getFilters(req, productListFilters)
    console.log(paginationOption)
    try {
      const productModel = await ProductModel();
     
      const responseData = await productModel.findAndCountAll({where:{...productFilters}, ...paginationOption })
    
      const paginatedResponseData = getResponsePaginationObj(paginationOption,responseData,'products')
      return res.json({ ...paginatedResponseData }).status(200);
    }
    catch (err) {
     
      return res.json({msg:"fetching fails"}).status(502)
    }
   
  });
//   insert api
  route.post('/create',async (req,res)=>{
    try{  
        const product = await ProductModel()
        const productCreate = await product.create({...req.body})
        return res.json({msg:"inserted"}).status(200)
    }
    catch(err){
        console.log(err)
        return res.json({msg:"insertion fails",backend:err.parent.sqlMessage}).status(502)
    }
  })
};
module.exports = Product;