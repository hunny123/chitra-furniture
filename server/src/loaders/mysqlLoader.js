
const { Sequelize } = require('sequelize');

const config = { connect_url:"mysql://utugyzjitulvnrem:DNzjBIBaLIR6TYx4Ld7l@bflgxutltbqwukfguenj-mysql.services.clever-cloud.com:3306/bflgxutltbqwukfguenj"}

const mySQLDB = () =>{ 
  var db = null;
  var instance = 0;
  async function DbConnect(){
    try {
      const sequelize = new Sequelize(config.connect_url)
      await sequelize.authenticate();
      db = sequelize
     
      return db
    }
    catch(err){
      console.log(err)
      return err
    }
  }
  async function get() {
    try {
      instance++;
      console.log(`connection instance ${instance}`)
      if(db!==null){
        console.log("connection exit")
        return db
      }
      else {
        db = await DbConnect();
        console.log(`getting new db connection`);
        return db; 
      }
    }
    catch(e){
      return e
    }

  }
  return { get: get} 
}
  
module.exports =mySQLDB
