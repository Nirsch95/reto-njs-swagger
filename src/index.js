const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/patient');
require("dotenv").config();
const path = require('path');

// swagger
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Node MongoDB API",
            version: "1.0.0"
        },
        servers: [
            {
                url: ""
            }
        ]
    },
    apis: [`${path.join(__dirname, "./routes/patient.js")}`],
}

// settings
const app = express();
const port = process.env.PORT || 9000;

// middleware
app.use(express.json());
app.use('/api', router);
app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));

// routes 
app.get('/', (req, res) => {
    res.send("Welcome to the API")
})

// mongodb connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.error(error));

app.listen(port, () => console.log('Server listing on port', port));