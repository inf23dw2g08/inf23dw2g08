
const connection = require("../utils/db");

// users hardcoded for simplicity, store in a db for production applications
const users = [
    { id: 1, username: 'basicUser', password: 'basicPassword', firstName: 'Basic', lastName: 'User' },
    { id: 2, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }];

async function authenticate({ username, password }) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        return true;
    }
    return false;
}

function getAll() {
    return new Promise( (resolve, reject) => {
        connection.query('SELECT * FROM users', (err, results) => {
            if (err) {
                console.error('Error fetching users:', err);
                reject(err);
            }
            console.error('results:', results);
            resolve(results);       
        });
    });
//    return users.map(u => {
//        const { password, ...userWithoutPassword } = u;
//        return userWithoutPassword;
//    });
};



module.exports = { authenticate, getAll };