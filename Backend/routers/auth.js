const express = require('express')
const router = express.Router()
const { login, refresh, callback } = require('../controllers/auth')

router.post('/login', login)
// .post('/refresh', refresh).get('callback',callback)
// .get('/profile/userinfo', userinfo)
module.exports = router
