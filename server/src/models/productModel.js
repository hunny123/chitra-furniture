const {Sequelize, DataTypes } = require('sequelize');
const mySQL = require('../loaders/mysqlLoader')
const ProductModel=async()=>{
    try{
        const sequelize =await mySQL().get()
        
        const Product = sequelize.define('Products',{
            id:{
                type: DataTypes.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey:true,
                unique:true
            },
            name:{
                type:DataTypes.STRING,
                allowNull:false,
            },
            description:{
                type:DataTypes.STRING,
                allowNull:false,
            },
            price:{
                type:DataTypes.INTEGER,
                allowNull:false,
            },
            stock:{
                type:DataTypes.INTEGER,
            },
            sku :{
                type:DataTypes.STRING
            },
            category_id :{
                type:DataTypes.INTEGER,
                allowNull:false
            },
            image:{
                type:DataTypes.STRING
            },
           
        },{ 
            timestamps: false,
            createdAt: false,
            updatedAt: false
        })
       
        return Product
    }
    catch(e){
        console.log(e)
        return e
    }
    
}

module.exports = ProductModel