const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require("path");
const layout = require("./views/layout");
const { db } = require("./models");
const usersRouter = require("./routes/users");
const wikiRouter = require("./routes/wiki");



db.authenticate()
    .then(() => {
        console.log("connected to the database")
    })

app.use(morgan("dev"));


app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use("/users", usersRouter);
app.use("/wiki", wikiRouter);

app.get("/", (req, res) => {
    res.redirect("/wiki");
})


async function initate () {
    const PORT = 3000;
    await db.sync({force: true});
    app.listen(PORT, () => {
        console.log("listening");
    })

}

initate();