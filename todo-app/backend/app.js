const express = require("express");
const cors = require("cors");
const db = require('./databaseController')

const app = express();
app.use(cors());
app.use(express.json())

const test = async () => {
    await db.initiateDB()
}

test()

app.post('/', (req, res) => {
    db.testsave(req.body.msg).then(() => db.testretrieve()).then(r => res.json(r))
})

app.get('/', async (req, res) => {
    const todos = await db.getAll()
    res.json(todos)
})

module.exports = app