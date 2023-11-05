const express = require('express')
const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.set('view engine', 'ejs')
app.use(logger) // accepts a function

app.get('/', (req, res) => {
    res.render('index', {text: 'World'})
})

const userRouter = require('./routes/users')

app.use('/users', userRouter)

// app.get('/users', auth, (req, res) => {
//     console.log(`User is admin = ${req.admin}`)
//     console.log('Users Page')
//     res.send('Users Page')
// })

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}
/*
function auth(req, res, next) {
    if(req.query.admin == 'true') {
        req.admin = true
        next()
    } else{
        res.send('No auth')
    }
} */

app.listen(3000)