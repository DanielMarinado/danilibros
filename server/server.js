const express = require('express');
const connectDB = require('./database');
const morgan = require('morgan');
const cors = require('cors');
const { readdirSync } = require('fs');
require('dotenv').config();

// Aplicación - Middelware express
const app = express();

// db
connectDB();

// Middlewares
app.use(morgan('dev'));
app.use(express.json({ limit: '2mb' }));
app.use(cors());

// fs - para leer dinamicamente todas las rutas en una línea
readdirSync("./routes").map((r)=> app.use("/api", require("./routes/" + r)));

// port
const port = process.env.PORT || 8000;

app.listen( port, () =>  console.log(`Servidor corriendo en puerto: ${port}`) );