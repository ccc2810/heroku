const express = require("express");
const patientsController = require("../../controllers/patientsController");

const router = express.Router();

router.get("/", patientsController.getAllWorkouts);

router.post("/login", patientsController.loginUser);

router.get("/:patientId", patientsController.getUser);

router.get("/:workoutId", patientsController.getOneWorkout);

router.post("/", patientsController.createNewWorkout);
  
router.patch("/:workoutId", patientsController.updateOneWorkout);
  
router.delete("/:workoutId", patientsController.deteleteOneWorkout);

module.exports = router;