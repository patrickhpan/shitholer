const express = require('express');
const getPFP = require('../apis/getPFP');

const router = express.Router();

const isAuthenticated = req => (req.session !== undefined && req.session.passport !== undefined && req.session.passport.user !== undefined && req.session.passport.user.id !== undefined)

router.get('/authenticated', (req, res) => {
    console.log(req.session)
    if (isAuthenticated(req)) {
        console.log(">>authenticated")
        res.end("true")
    } else {
        console.log(">>not authenticated")
        res.end("false")
    }
})

router.get('/picture', (req, res) => {
    if (isAuthenticated(req)) {
        getPFP(req.session.passport.user.token, req.session.passport.user.id).then(data => {
            res.json({
                authenticated: true,
                url: data
            })
        }).catch(console.error.bind(console));
    } else {
        console.log(">>not authenticated")
        res.json({
            authenticated: false
        })
    }
})

module.exports = router