const express = require("express");
const dotenv = require('dotenv').config();
const {errorHandler} = require('./src/middleware/errorMiddleware.js')

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use('/api/todos', require('./src/routes/todoRoutes'))
app.use(errorHandler)

app.listen(port, () => {
    console.log(`live on ${port}`);
})