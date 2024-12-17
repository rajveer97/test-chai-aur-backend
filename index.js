require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

// console.log("zzz dotenv", process.env);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/twitter", (req, res) => {
    res.send("Hi Rajveer!!")
})

app.get("/login", (req, res) => {
    res.send("<h1>Please login first get access!!<h1>");
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})