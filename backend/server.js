const express = require('express');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');

const PORT = process.env.PORT || process.env.API_PORT;

const app = express();
app.use(express.json());
// app.use(cors());

app.use(cors({
    origin: 'http://localhost:3000', // 指定允许的来源
    credentials: true, // 允许请求携带凭据（例如 Cookie）
}));

app.use("/api/auth", authRoutes);

const server = http.createServer(app);



mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Server is listening on ${PORT}`);
        });
    })
    .catch((err) => {
        console.log('database connection error');
        console.error(err);
    })

