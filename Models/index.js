const dbconfig = require('../Config/dbconfig.js');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(
    dbconfig.DB,
    dbconfig.USER,
    dbconfig.PASSWORD,
    {
        host: dbconfig.HOST,
        dialect: dbconfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbconfig.pool.max,
            min: dbconfig.pool.min,
            acquire: dbconfig.pool.acquire,
            idle: dbconfig.pool.idle
        }

    }
)
sequelize.authenticate().then(() => {
    console.log('connected')
})
    .catch(err => {
        console.log("error" + err)
    })
const db = {}
db.sequelize = sequelize
db.sequelize = sequelize
db.contact_forms = require('./contact_form.js')(sequelize, DataTypes)
db.sequelize.sync({ force: false })
    .then(() => {
        console.log('Sync is done')
    })
module.exports = db;