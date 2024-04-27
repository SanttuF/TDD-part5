const express = require("express");
const cors = require("cors");
const db = require('./databaseController')

const app = express();
app.use(cors());
app.use(express.json())

const initiateDB = async () => {
    await db.initiateDB()
}
initiateDB()

app.post('/', async (req, res) => {
    await db.save(req.body.todo)
    res.status(201).send()
})

app.get('/', async (req, res) => {
    const todos = await db.getAll()
    res.json(todos)
})

module.exports = app