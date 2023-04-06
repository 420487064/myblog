const express = require('express')
const router = express.Router()


const getbyid = require('./getbyid');
router.use(getbyid)

const getbytag = require('./getbytag');
router.use(getbytag)

const getbyclass = require('./getbyclass');;
router.use(getbyclass)

const getall = require('./getall')
router.use(getall)

const getrecently = require('./getrecently')
router.use(getrecently)


module.exports = router