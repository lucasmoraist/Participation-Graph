const bodyParser = require("body-parser");
const cors = require('cors');

const user = require("./userRoute.js")

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};

module.exports = app =>{
    app.use(
        cors(corsOptions),
        bodyParser.json(),
        user
    )
}