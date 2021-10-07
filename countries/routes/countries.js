const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.get("/", (req, res) => {
    fetch("https://restcountries.com/v2/all")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            if (data.length > 0) {
                res.render("index", {
                    title: "Countries",
                    data,
                });
            } else {
                res.render("404");
            }
        });
});

router.get("/name/:name", (req, res) => {
    const name = req.params.name;
    fetch("https://restcountries.com/v2/name/" + name + "?fullText=true")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            if (data.length > 0) {
                res.render("country", {
                    title: name,
                    data,
                });
            } else {
                res.render("404", {
                    error: "404",
                    title: "Error: Page not found",
                });
            }
        });
});

router.get("/region/:region", (req, res) => {
    const name = req.params.region;
    fetch("https://restcountries.com/v2/continent/" + name)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            if (data.length > 0) {
                res.render("index", {
                    title: name,
                    data,
                });
            } else {
                res.render("404", {
                    error: "404",
                    title: "Error: Page not found",
                });
            }
        });
});

router.get("/search/:name", (req, res) => {
    const name = req.params.name;
    fetch("https://restcountries.com/v2/name/" + name)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            if (data.length > 0) {
                res.render("index", {
                    title: `Search: ${name}`,
                    val: name,
                    data,
                });
            } else {
                res.render("404", {
                    error: "No Result Found",
                    title: "No result!",
                });
            }
        });
});

module.exports = router;