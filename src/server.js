// In src/index.js
const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const v1PatientsRouter = require("./v1/routes/patientsRoutes");
const dialogFlowServices = require("./services/dialogflowServices");

const ngrokRoute = ['https://5930-84-123-16-254.ngrok-free.app']

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json())
app.use(cors({
  origin: ngrokRoute
}))

app.use("/api/cvd", express.static(path.join(__dirname + "/../client")))
app.use("/api/v1/patients", v1PatientsRouter)
app.use("/webhook", dialogFlowServices);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
