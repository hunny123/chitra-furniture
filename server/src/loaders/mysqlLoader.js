
const { Sequelize } = require('sequelize');
const config = { connect_url:"mysql://utugyzjitulvnrem:DNzjBIBaLIR6TYx4Ld7l@bflgxutltbqwukfguenj-mysql.services.clever-cloud.com:3306/bflgxutltbqwukfguenj"}
const mySQL =  async () => {
  const sequelize = new Sequelize(config.connect_url);
  try {
    await sequelize.authenticate()
    console.log("connection successfully")
  } catch (err) {
    console.error('Unable to connect to the database:', err)
  }
 
}
module.exports =mySQL
