require('dotenv').config()

const express = require('express')
const { engine } = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
const gigsRouter = require('./routes/gigs')

const PORT = process.env.APP_PORT ?? 4000

const app = express()

app.engine('handlebars', engine({ defaultLayout: 'main' }))

app.set('view engine', 'handlebars')
app.set('views', './views')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/gigs', gigsRouter)

app.get('/', (req, res) => res.render('index', { layout: 'landing' }))

app.listen(PORT, () => console.log(`listening to ${PORT}`))
