const bodyParser = require("body-parser");

const user = require("./UserRoute.js")

module.exports = app =>{
    app.use(
        bodyParser.json(),
        user
    )
}