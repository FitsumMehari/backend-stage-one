const express = require("express");
const hobbyRoute = require('./routes/hobby');
const dreamRoute = require('./routes/dream');
const nameRoute = require('./routes/name');
const { redirect } = require("express/lib/response");

const app = express();

const PORT = 3000;

app.use(express.json());

app.use("/name", nameRoute);
app.use("/hobby", hobbyRoute);
app.use("/dream", dreamRoute);

app.use((req, res) => {
    res.redirect("/name")
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})