const express = require('express')
// nạp router
const router = express.Router()

// nạp controller
const newsController = require('../app/controllers/NewsController')

router.use('/:slug',newsController.show)
router.use('/',newsController.index)
module.exports = router
