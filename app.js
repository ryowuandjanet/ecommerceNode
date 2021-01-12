const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const expressValidator =  require("express-validator")
require("dotenv").config()

const userRoutes = require("./routes/user")

const app = express()

mongoose.connect(process.env.DATABASE,
{
    useNewUrlParser: true,
    useCreateIndex: true
})
.then(() => console.log("DB Connected"));

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(expressValidator())

app.use("/api",userRoutes)

app.listen(process.env.PORT,process.env.IP)