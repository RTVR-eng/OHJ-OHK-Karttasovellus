require('dotenv').config()

const express = require('express');


// express app
const app = express()

//routes
app.get('/', (req, res) => {
    res.json({ msg: 'Welcome to the app'})
})

// listen for request

const PORT = process.env.PORT || 5500;

app.listen(process.env.PORT, () =>  {
    console.log('listening on port 5500', process.env.PORT)
})

