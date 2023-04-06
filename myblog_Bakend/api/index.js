const express = require('express')
const router = express.Router()

const login = require('./login/index.js');
const article = require('./article/index.js');
const backcontrol = require('./bkcnotrol/index.js');

router.use(backcontrol)
router.use('/api',login)
router.use('/api',article)


 module.exports =  router
