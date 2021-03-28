const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const Product = sequelize.define('Product',{
    id:{
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4
    },
    name:{
        type :DataTypes.String,
        allowNull:false,
    },
    description:{
        type:DataTypes.String,
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
        type:DataTypes.String
    },
    category_id :{
        type:DataTypes.Integer,
        allowNull:false
    },
    image:{
        type:DataTypes.String
    },
    thumbnail:{
        type:DataTypes.String
    }
})
module.exports = Product