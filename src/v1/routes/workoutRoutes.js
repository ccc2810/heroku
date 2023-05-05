const express = require("express");
const workoutController = require("../../controllers/workoutController");

const router = express.Router();

router.get("/", workoutController.getAllWorkouts);

router.post("/login", workoutController.loginUser);

router.get("/:workoutId", workoutController.getOneWorkout);

router.post("/", workoutController.createNewWorkout);
  
router.patch("/:workoutId", workoutController.updateOneWorkout);
  
router.delete("/:workoutId", workoutController.deteleteOneWorkout);

module.exports = router;