const bookshelf = require('./db');

// Defining models
const User = bookshelf.model('User', {
    tableName: 'users'
});

module.exports = User;
