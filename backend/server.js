require("dotenv").config();
const express = require("express");
const app = express();
const {sequelize} = require("./helpers/dbConfig");
const bodyparser = require("body-parser");
const user = require("./routes/api/user");
const cors = require("cors");

app.use(bodyparser.json());
var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions));
// app.use((req, res, next) => {
//     const allowedOrigins = ['http://127.0.0.1:3000'];
//     const origin = req.headers.origin;
//     if (allowedOrigins.includes(origin)) {
//          res.setHeader('Access-Control-Allow-Origin', '*');
//     }
//     //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
//     res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     res.header('Access-Control-Allow-Credentials', true);
//     return next();
// });

app.get("/", (req, res) => {
    res.send("Hello, world!");
})

app.use("/users", user);
app.listen(process.env.PORT, () => {
    console.log("listening on port " + process.env.PORT);
    sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully.');
    }).catch((error) => {
        console.error('Unable to connect to the database: ', error);
    });
});
