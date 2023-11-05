const { MongoClient } = require('mongodb')
let dbConnection

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect('mongodb://localhost:27017/bookstore')
        .then(client => {
            dbConnection = client.db()
            return cb()
        })
        .catch(err => {
            console.log(err)
            return cb(err)
        })
    }, // establish connection with the database
    getDb: () => dbConnection // return our database connection once connection is establish. Used for communicating with the database
}