// Third party module
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Router
const infoRouter = require("./router")
app.use("/info",infoRouter)

// Listen port
app.listen(5000,() => {
    console.log("Server started on 5000")
})

// Database connection
mongoose.connect("mongodb://localhost/mernapp", (err) => {
    if(!err)
    {
        console.log("Database connected successfully")
    }
});