require('dotenv').config()

const express = require('express');
const AppRoutes = require('./routes/locations.routes')


// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/locations', AppRoutes)

// listen for request

const PORT = process.env.PORT || 5500;

app.listen(PORT, () =>  {
    console.log('listening on port', PORT)
})

