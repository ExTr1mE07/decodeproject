const express  = require('express');
const router = express.Router()
const category = require('./category')
const writeDataCategory = require('./seed')

router.get ('/api/category', async(req, res) => {
    const data = await category.find()
    res.send({data})
})

// writeDataCategory()

module.exports = router