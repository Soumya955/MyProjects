const express = require("express");
const axios = require('axios');

const app = express.Router();

app.get("/", (req, res) => {
  const apiUrl =
    "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=12.9564672,77.6634368&rankby=distance&key=AIzaSyAaCrELm-SemYV2KoduK7ESnZ2UmN44EeQ";

    axios.get(apiUrl)
    .then((data) => {
     res.send(data.data.results);
    })
    .catch((err) => {
      console.error("Fetch error:", err);
    });
});

module.exports = app;
