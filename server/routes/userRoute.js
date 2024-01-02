const { Router } = require('express')
const user = require("../controller/UserController.js")

const router = Router()

router
    .get('/users', user.findAll)
    .post('/users', user.create)

module.exports = router