const superTest = require('supertest')
const app = require('./app')

const api = superTest(app)

test('getting all todos', async () => {
  const res = await api
    .get('/')
    .expect(200)
    .expect('Content-Type', /application\/json/)

    const todos = res.body
    console.log(todos)
})