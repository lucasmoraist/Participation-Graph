const { Router } = require('express')
const user = require("../controller/UserController.js")

const router = Router()

router
    .get('/users', user.findAll)

module.exports = router