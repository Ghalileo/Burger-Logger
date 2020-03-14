const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

router.get("/", (req, res) => {
    burger.selectAll((data) =>{
        const handlebars = {
            burgers: data
        };
        res.render("index", handlebars);
    });
});

router.post("/api/burger", (req, res) =>{
    console.log(req.body);
    burger.insertOne("burger_name", req.body.newBurger, (data) =>{
        res.json({ id: data.insertId });
    });
});

router.put("/api/burger/:id", (req, res) =>{
    const id = req.params.id;
    console.log(id);
    burger.updateOne(id, (result) => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;