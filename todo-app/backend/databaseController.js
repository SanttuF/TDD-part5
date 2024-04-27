const sqlite3 = require('sqlite3').verbose();

let db =  new sqlite3.Database('./database/db.sqlite')
db.serialize()

const initiateDB = () => {
    return new Promise ((resolve, reject) => {
        db.run('DROP TABLE IF EXISTS todos;') 
        db.run('CREATE TABLE todos (id INTEGER PRIMARY KEY AUTOINCREMENT,todo TEXT);', () => {resolve()}) 
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

const save = (todo) => {
    return new Promise((resolve, reject) => {
        db.run('INSERT INTO todos (todo) VALUES (?)', todo, (e) => {
          if(e) reject(e)
          resolve(todo)
        })
      })
}

module.exports = {initiateDB, getAll, save}
