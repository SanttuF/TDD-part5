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

app.get('/', (req, res) => {
    res.send('hello from backend')
})

app.listen(8080, () => {
    console.log('server online')
})