const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

if (fs.existsSync('./database/db.sqlite')) {
    fs.unlinkSync('./database/db.sqlite')
}
let db =  new sqlite3.Database('./database/db.sqlite')
db.serialize()

const initiateDB = () => {
    return new Promise ((resolve, reject) => {
        db.run('CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY AUTOINCREMENT,text TEXT);', ) 
        db.run('CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY AUTOINCREMENT,todo TEXT);', () => {resolve()}) 
    })
}

const getAll = () => {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM todos', (error, result) => {
            if(error) reject(error)
            resolve(result)
        })
    })
}

const testsave = (todo) => {
    return new Promise((resolve, reject) => {
        todo = 'Hello ' + todo + ' from backend'
        db.run('INSERT INTO test (text) VALUES (?)', todo, function() {resolve(todo)})
    })
}

const testretrieve = () => {
    return new Promise((resolve, reject) => {
        db.get("SELECT text FROM test WHERE text LIKE 'Hello %'", function(error, row) {
            if (error) reject(error)
            resolve(row)
        })
    })
}

module.exports = {initiateDB, testsave, testretrieve, getAll}
