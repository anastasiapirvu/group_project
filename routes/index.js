var express = require('express');
var router = express.Router();
const db = require("../model/helper");

// homepage
router.get("/", (req, res) => {
  res.send({ message: 'Welcome to the ShoppingList' });
});

//Get ALL items in shopping
router.get("/shoppingList", async (req, res) => {
  try {
      let results = await db('SELECT * FROM items');
      let items = results.data;
      res.send(items);
  } catch (err) {
      res.status(500).send({ error: err.message });
  }
});

// GET duck with ID
router.get("/shoppingList/:id", async (req, res) => {
  let itemId = req.params.id;

  try {
      let results = await db(`SELECT * FROM items WHERE id = ${itemId}`);
      let items = results.data;
      if (items.length === 0) {
          res.status(404).send({ error: 'Item not found' });
      } else {
          res.send(items[0]);
      }
  } catch (err) {
      res.status(500).send({ error: err.message });
  }
});

// POST new item
router.post("/shoppingList", async (req, res) => {
  let { name, quantity } = req.body;

  let sql = `
      INSERT INTO items (name, quantity)
      VALUES ('${name}', ${quantity})
  `;

  try {
      await db(sql);
      let result = await db('SELECT * FROM items');
      let items = result.data;
      res.status(201).send(items);
  } catch (err) {
      res.status(500).send({ error: err.message });
  }
});

//PUT modified item

router.put("/shoppingList/:id", async (req, res) => {
  let itemId = req.params.id;
  let { name, quantity } = req.body;

  try {
      let result = await db(`SELECT * FROM items WHERE id = ${itemId}`);
      if (result.data.length === 0) {
          res.status(404).send({ error: 'Item not found' });
      } else {
          let sql = `
              UPDATE items 
              SET name = '${name}', quantity = ${quantity}
              WHERE id = ${itemId}
          `;

          await db(sql);
          let result = await db('SELECT * FROM items');
          let items = result.data;
          res.send(items);
      }
  } catch (err) {
      res.status(500).send({ error: err.message });
  }
});

//DELETE item
router.delete("/shoppingList/:id", async (req, res) => {
  let itemId = req.params.id;

  try {
    let result = await db(`SELECT * FROM items where id = ${itemId};`);
    if (result.data === 0) {
      res.status(404).send({ error: "Item not found" });
    } else {
      await db(`DELETE FROM items WHERE id = ${itemId};`);
      let results = await db(`SELECT * FROM items;`);
      let items = results.data;
      res.send(items);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});





module.exports = router;
