var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require('../config');
const db = require("../model/helper");


//Get user
router.get("/login", (req, res) => {
    if (req.session.user) {
      res.send({ loggedIn: true, user: req.session.user });
    } else {
      res.send({ loggedIn: false });
    }
  });

//Register a user
router.post('/register', async (req, res, next) => {
    let { username, password, email } = req.body;
    let hashedPassword = await bcrypt.hash(password, 10);
    try {
        let sql = `
            INSERT INTO users (username, password, email)
            VALUES ('${username}', '${hashedPassword}', '${email}')
        `;
        await db(sql);
        res.send({ message: 'Registration successful' });
    } catch (err) {
        next(err);
    }
});
 //Log in a user
router.post('/login', async (req, res, next) => {
    let { username, password } = req.body;
    try {
        let results = await db(`SELECT * FROM users WHERE username = '${username}'`);
        if (results.data.length === 0) {
            // Username not found
            res.status(401).send({ error: 'Login failed' });
        } else {
            let user = results.data[0];  // the user's row/record from the DB
            let passwordsEqual = await bcrypt.compare(password, user.password);
            if (passwordsEqual) {
                // Passwords match
                let payload = { userId: user.id };
                // Create token containing user ID
                let token = jwt.sign(payload, SECRET_KEY);
                // Return return user (without password)
                delete user.password;
                res.send({
                    message: 'Login succeeded',
                    token: token,
                    user: user
                });
            } else {
                // When passwords don't match
                res.status(401).send({ error: 'Login failed' });
            }
        }
    } catch (err) {
        next(err);
    }
});


module.exports = router;