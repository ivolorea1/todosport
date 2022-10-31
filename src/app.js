
require ('./connection.js');
const getAll = require('./crud/getAll.js')
const express = require('express')
const app = express()
const path = require("path");
const { response } = require('express');
app.use(express.json())
app.listen(5000, () => {
    console.log("app server started on port 5000")
  });

let productos = []
getAll.then( result => {
    productos = result
    console.log(productos)
})


app.get("/", (req, res) => {
    res.send("<h1>backend del sexo</h1>")

})
app.get('/api/products', (req, res) => {
    res.json(productos)
})
app.post('/api/products', (req,res) => {
    const productos = req.body
    console.log(productos)
    res.json(productos)
})

