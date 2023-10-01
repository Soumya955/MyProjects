const express = require("express");
const axios = require('axios');

const app = express.Router();

app.get("/", (req, res) => {
  const apiUrl =`https://newsapi.org/v2/top-headlines?country=in&apiKey=2e41d48fbf244e48ba1db6e27c41834a`;
    axios.get(apiUrl)
    .then((data) => {
     res.send(data.data.articles);
    })
    .catch((err) => {
      console.error("Fetch error:", err);
    });
});

module.exports = app;
