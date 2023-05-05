const { response } = require("express");
const workoutService = require("../services/workoutService");

const getAllWorkouts = (req, res) => {
    const allWorkouts = workoutService.getAllWorkouts();
    res.send({status: "OK", data: allWorkouts});
};

const loginUser = (req, res) => {
    //User & Password from the request body
    const user = req.body.username;
    const password = req.body.password;
    //Call the service to login the user
    const existingUser = workoutService.loginUser(user, password);
    let response = {status: "404", data: existingUser};
    if (existingUser != null) {
        response = {status: "200", data: existingUser};
    }
    res.send(response);
}

const getOneWorkout = (req, res) => {
    const workout = workoutService.getOneWorkout();
    res.send("Get an existing workout");
};

const createNewWorkout = (req, res) => {
    const createWorkout = workoutService.createNewWorkout();
    res.send("Create a new workout");
};

const updateOneWorkout = (req, res) => {
    const updateWorkout = workoutService.updateOneWorkout();
    res.send("Update an existing workout");
};

const deteleteOneWorkout = (req, res) => {
    workoutService.deteleteOneWorkout();
    res.send("Delete an existing workout");
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deteleteOneWorkout,
    loginUser,
};