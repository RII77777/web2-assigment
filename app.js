const express = require("express");
const cors = require("cors");

const weatherRoutes = require("./src/routes/weather.routes");
const newsRoutes = require("./src/routes/news.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/weather", weatherRoutes);
app.use("/api/news", newsRoutes);

module.exports = app;
