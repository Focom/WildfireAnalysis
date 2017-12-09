var constant = require('./constant')
var fs = require('fs')
var path = require('path')
var appDir = path.dirname(require.main.filename)

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

function query (year, fieldToGet) {
  let query = 'SELECT ' + fieldToGet + ' FROM Fires WHERE FIRE_YEAR=' + year + ';'
  return new Promise(resolve => {
    sequelize.query(query).then(Fires => {
      resolve(Fires)
    })
  })
}

async function writeToFile (appDir, year, fields) {
  let value = await query(year, fields)
  let resultQuery = value[0]

  fs.writeFile(appDir + '/DataJSON/' + year + '.json', JSON.stringify(resultQuery), function (err) {
    if (err) {
      return console.log(err)
    }
    console.log('The file was saved!')
  })
}

function createAllJSON () {
  for (var i = 1992; i < 2016; i++) {
    writeToFile(appDir, i, constant.fields)
  }
}

//First be sure to have the FPA_FOD_20170508.sqlite file in this folder 
// Call this function to create the required json to populate the mongodatabase
// createAllJSON()

// Once done execute the importDocuments script, your mongodb will be ready in seconds.
