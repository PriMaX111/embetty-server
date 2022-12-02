const express = require('express')
const facebook = require('./video/facebook')
const vimeo = require('./video/vimeo')
const vimeoOembed = require('./video/vimeoOembed')
const youtube = require('./video/youtube')

const router = express.Router()

router.use('/youtube', youtube)
router.use('/vimeo', vimeo)
router.use('/vimeo/oembed', vimeoOembed)
router.use('/facebook', facebook)

module.exports = router
