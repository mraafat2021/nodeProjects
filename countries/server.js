const express = require("express");
const path = require("path");

require("dotenv").config();

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/", require("./routes/countries"));

app.use((req, res) => {
    if (res.status(404)) {
        return res.status(404).render("404", {
            error: "404",
            title: "Error: Page not found",
        });
    }
    if (res.status(500)) {
        return res.status(500).render("404", {
            error: "500",
            title: "Internal Serval Error",
        });
    }
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.listen(process.env.PORT || 2000);