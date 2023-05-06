const express = require('express')
const { MongoClient } = require('mongodb');

// Connection URL
const url = process.env.DB_URL;
const client = new MongoClient(url);

// Database Name
const dbName = 'demo';

// Use connect method to connect to the server
client.connect().then(() => {
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('documents');

    const app = express()
    const port = 3000

    app.get('/document', async (req, res) => {
        const id = req.query.id;

        const data = await collection.findOne({
            id
        })

        res.send({
            document: data
        });
    })

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}).catch(() => {
    console.log("Error connecting to db.")
});
