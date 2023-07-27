const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const app = express();
dotenv.config();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Home");
})
app.get("/home", (req, res) => {
    res.send("Home11");
})
app.post("/k", (req, res) => {
    res.send("login");
})
app.post("/login", (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    if (password == "mayjune") {
        // if (req.body.password == "mayjune") { ifnodestructuring
        res.send("login success");
    } else {
        res.send("password incorrect");
    }
});
app.use('/api', require("./routes/auth"))
app.use('/api', require("./routes/register"))
mongoose.connect(process.env.DB).then(() => {
    console.log("connected");
}).catch(err => {
    console.log("not connected");
})
app.listen(5000, () => {
    console.log("server listening at port 5000");
})