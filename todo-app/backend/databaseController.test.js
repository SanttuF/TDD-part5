const dbController = require('./databaseController')

const sqlite3 = require('sqlite3').verbose()
let db =  new sqlite3.Database('./database/db.sqlite')
db.serialize()

beforeEach(async () => {
  await dbController.initiateDB()
})

test('database returns all todos when asked', async () => {
  const todo = 'Test123'
  const todo2 = 'test2'
  await new Promise((resolve, reject) => {
    db.run('INSERT INTO todos (todo) VALUES (?)', todo, (e) => {
      if(e) reject(e)
      resolve(todo)
    })
  })
  await new Promise((resolve, reject) => {
    db.run('INSERT INTO todos (todo) VALUES (?)', todo2, (e) => {
      if(e) reject(e)
      resolve(todo2)
    })
  })
  const r = await dbController.getAll()
  expect(r.length).toEqual(2)
  expect(r[0].todo).toBe(todo)
  expect(r[1].todo).toBe(todo2)
})