const express = require('express')
const app = express()
const port = 3000

app.get('/hello', (req, res) => {
    res.send('Hello World!');
})

app.get('/env', (req, res) => {
    res.send(`The environment variable is: ${process.env.MASSEYHACKS_VARIABLE}`);
})

app.get('/envRuntime', (req, res) => {
    res.send(`The runtime environment variable is: ${process.env.MASSEYHACKS_VARIABLE_RUNTIME}`);
})

app.get("/static", express.static("static"))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})