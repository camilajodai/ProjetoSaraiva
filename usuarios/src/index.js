require("dotenv").config();

const express = require("express");
const router = require("./routes/users/users.js")
const routerpersonal = require("./routes/personaldata/personaldata.js")
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(cors())
app.use("/api/v1/users/", router);
app.use("/api/v1/personaldata/", routerpersonal)

app.listen(process.env.HOST_PORT, () => {
    console.log(`Servidor online em: 
    ${process.env.HOST_NAME}:
    ${process.env.HOST_PORT}`)
}
);

