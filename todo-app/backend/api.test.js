const superTest = require('supertest')
const app = require('./app')
const dbController = require('./databaseController')

const api = superTest(app)

const sqlite3 = require('sqlite3').verbose()
let db =  new sqlite3.Database('./database/db.sqlite')
db.serialize()

beforeEach(async () => {
  await dbController.initiateDB()
})

test('getting all todos', async () => {
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

test('post saves given todo', async() => {
  const testTodo = 'testTodo'
  await api
    .post('/')
    .send({'todo': testTodo})
    .expect(201)
  
  const todos = await new Promise((resolve, reject) => {
    db.all('SELECT * FROM todos', (error, result) => {
        if(error) reject(error)
        resolve(result)
    })
  })
  expect(todos[0].todo).toBe(testTodo)
})