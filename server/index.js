require('dotenv').config()
const massive = require('massive')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const HashRouter = require('hashrouter')


massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
}).catch(err => console.log(err))
app.use(bodyParser.json())








const PORT = process.env.SERVER_PORT || 4800


app.listen(PORT, () => console.log(`server is listening${PORT}`))