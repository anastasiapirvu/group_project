var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
const db = require("../model/helper");


router.use(bodyParser.json());


// homepage
router.get("/", (req, res) => {
    res.send({ message: 'Welcome to the ShoppingList' });
});

//Get ALL items in shopping list
router.get("/items", async (req, res) => {
    try {
        let results = await db('SELECT * FROM items');
        let items = results.data;
        res.send(items);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});