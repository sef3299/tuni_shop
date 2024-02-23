const express = require("express");
const cors = require('cors');
const connectdb = require('./Configuration/Config');

const paymentrouter = require("./router/paymentrouter");
const userrouter = require("./router/Router");
const productrouter= require("./router/Productrouter")



const app = express();
const port = 9000;

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

// Utilisation des routeurs distincts pour chaque type de route
app.use("/", paymentrouter);
app.use("/user", userrouter);
app.use("/product",productrouter)


connectdb()

app.listen(port, () => {
    console.log("Server is running on port " + port);
});
