var express = require('express');
var messageRouter = express.Router();

messageRouter.route('/')
    .get((req, res, next) => {
        res.send('Message homepage');
    })

module.exports = messageRouter