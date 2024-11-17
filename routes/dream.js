const router = require("express").Router();

router.get("/", (req, res) => {
    return res.status(200).send("Everything in life begins with small steps that pile up into big ones along the way. Programming requires consistent practice.")
})


module.exports = router;