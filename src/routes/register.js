const express = require("express")
const router = express.Router();
router.post("/register/:id", (req, res, next) => {
    console.log(req.params.id);
    if (req.body.password == "mayjune") {
        next();
        console.log("ok");
    } else {
        res.send("incorrect")
        console.log("incorrect");
    }
}, (req, res) => {
    res.send("sucess")
});
module.exports = router