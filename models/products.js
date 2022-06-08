const bookshelf = require('./db');

// Defining models
const products = bookshelf.model('products', {
    tableName: 'products'
});

module.exports = products;
