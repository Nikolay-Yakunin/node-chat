const express = require("express")

// env, ref later
const PORT = 3000

const app = express()

app.get('/', async (req, res) => {
  res.send("Server is working")
})