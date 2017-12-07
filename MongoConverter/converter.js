
var fs = require('fs')
const Sequelize = require('sequelize')
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'sqlite',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

    // SQLite only
  storage: './DataSet/FPA_FOD_20170508.sqlite'
})

sequelize
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.')
})
.catch(err => {
  console.error('Unable to connect to the database:', err)
})

function query () {
  return new Promise(resolve => {
    sequelize.query('SELECT * FROM Fires WHERE FIRE_YEAR=2005').then(Fires => {
      resolve(Fires)
    })
  })
}

async function writeToFile () {
  let value = await query()
  fs.writeFile('test.json', JSON.stringify(value), function (err) {
    if (err) {
      return console.log(err)
    }

    console.log('The file was saved!')
  })
}

// testWriting()
writeToFile()
