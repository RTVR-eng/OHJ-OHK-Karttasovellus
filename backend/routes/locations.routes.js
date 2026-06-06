const express = require('express')

const router = express.Router()

// GET all locations
router.get('/', (req, res) => {
    res.json({mssg: 'GET all locations'})
})

// GET a single location
router.get('/:id', (req, res) => {
    res.json({mssg: 'Get a single location'})
})

// POST a new location
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new location'})
})

// DELETE a location
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a location'})
})

// UPDATE a LOCATION
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a new workout'})
})


module.exports = router