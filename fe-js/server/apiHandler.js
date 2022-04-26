const express = require('express');
const router = express.Router();
const axios = require('axios');

const { pythonApi } = require('./config');

router.get('/api/get', (req, res) => {
    const name = req.query.name;
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ get: `Sent via GET: ${name}` }));
});

router.post('/api/post', (req, res) => {
    res.send(
        `Sent via POST request: ${req.body.post}`,
    );
    // const conn = res.app.get('sqlConnection');
    // return new Promise((resolve, reject) => {
    //     conn.query(sql, function (err, rows) {
    //         if (err) {
    //             reject(err)
    //         } else {
    //             resolve(rows)
    //         }
    //     })
    // })
});

router.get('/api/postpy/:fe_text', (req, res) => {
    const fe_text = req.params.fe_text;
    // const fe_text = req.body.fe_text
    console.log('req fe_text:', fe_text)
    return new Promise((resolve, reject) => {
        axios.post(pythonApi, {
            "text": fe_text
        }).then(pythonApiRes => {
            console.log('pythonApiRes: ', pythonApiRes.data)
            resolve(pythonApiRes.data)
        }, err => {
            if(err.response){
                console.log('err.response.status: ', err.response.status)
                reject(err);
            }
        });
    })
});

module.exports = router;