const express = require('express')
//const env=require('dodenv')
const routerApi = require('./routes')
const { logError, errorHandler, boomError } = require('./middlewares/error.handler')
const { postgresMd5PasswordHash } = require('pg/lib/utils')

const app = express()
const port = 3000
//intento bd
//const con=env.


app.use(express.json())

app.get('/', (req, res) => {
    res.send("este es mi premer API - Hola mundo")
})
//intento
//app.get('/proyecto/v1/players', (req, res) => {
   // res.send("este es mi intento - proyect")
    
//})

routerApi(app)

app.use(logError)
app.use(boomError)
app.use(errorHandler)

app.listen(port, () => {
    console.log("El servidor se esta ejecutando.")
})