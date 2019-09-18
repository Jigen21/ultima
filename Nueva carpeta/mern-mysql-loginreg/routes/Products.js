const express = require("express")
const products = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const Product = require("../models/Producto")
products.use(cors())




products.get('/all', (req, res) => {
    Product.findAll()
      .then(product => {
        res.json(product)
      })
      .catch(err => {
        res.status(400).json({ error: err })
      })
  })


module.exports = products