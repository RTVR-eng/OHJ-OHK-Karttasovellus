require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose')
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

// connect to db
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        const PORT = process.env.PORT || 5500
        // listen for request 
        app.listen(PORT, () => {
            console.log('connected to db & listening on port', PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

