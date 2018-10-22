require('dotenv').config()
const massive = require('massive')
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const ctrl = require('./controller')
const app = express()

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
}).catch(err => console.log(err))

app.use(bodyParser.json())

app.use(session({
    secret: 'session secret',
    resave: false,
    saveUninitialized: false
}))




app.get('/api/listings', ctrl.all_listings)
app.post('/api/rent', ctrl.get_listing)
app.post('/api/listings', ctrl.newListing)
app.delete('/api/delete/:id', ctrl.delete_listing)
app.post('/api/login', ctrl.get_user)
app.post('/api/register', ctrl.create_user)

const PORT = process.env.SERVER_PORT || 4800


app.listen(PORT, () => console.log(`server is listening${PORT}`))