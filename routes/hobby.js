const router = require("express").Router();

router.get("/", (req, res) => {
    return res.status(200).json({ "hobby": "programming" })
})

module.exports = router;