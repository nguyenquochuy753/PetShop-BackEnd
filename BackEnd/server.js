const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const accountRouter = require('./routes/acconut')
const accessoryRouter = require('./routes/accessory')

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
app.use("/uploads", express.static("uploads"));

mongoose.connect(process.env.MONGO_CONNECT_URL)

app.use('/v1/account',accountRouter)
app.use('/v1/accessory',accessoryRouter)

app.listen(8000,()=>{
    console.log('Server is running on port 8000')
})
