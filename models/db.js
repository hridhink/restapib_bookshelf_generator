const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'apidata1',
        charset: 'utf8'
    }
})
const bookshelf = require('bookshelf')(knex)

module.exports = bookshelf;