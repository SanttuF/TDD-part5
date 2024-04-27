const superTest = require('supertest')
const app = require('./app')
const dbController = require('./databaseController')

const api = superTest(app)

const sqlite3 = require('sqlite3').verbose()
let db =  new sqlite3.Database('./database/db.sqlite')
db.serialize()

test('getting all todos', async () => {
  await dbController.initiateDB()
  const todo = 'Test123'
  const todo2 = 'test2'
  await new Promise((resolve, reject) => {
    db.run('INSERT INTO todos (todo) VALUES (?)', todo2, (e) => {if(e) console.log(e)})
    db.run('INSERT INTO todos (todo) VALUES (?)', todo, (e) => {
      if(e) console.log(e)
      resolve(todo)
    })
  })
  const res = await api
    .get('/')
    .expect(200)
    .expect('Content-Type', /application\/json/)

    const todos = res.body
    expect(todos).toContainEqual({'id': 2, todo})
    expect(todos).toContainEqual({'id': 1, 'todo': todo2})
})