const express = require('express')
const Location = require('../models/locationMode')

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
router.post('/', async (req, res) => {
    const {title, address, postcode, postarea} = req.body

    try {
        const location = await Location.create({title, address, postcode, postarea})
        res.status(200).json(location)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

// DELETE a location
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a location'})
})

// UPDATE a LOCATION
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a new location'})
})


module.exports = router