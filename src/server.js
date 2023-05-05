// In src/index.js
const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
const dialogFlowServices = require("./services/dialogflowServices");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json())
app.use("/api/cvd", express.static(path.join(__dirname + "/../client")))
app.use("/api/v1/workouts", v1WorkoutRouter)
app.use("/webhook", dialogFlowServices);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
