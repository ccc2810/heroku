const { response } = require("express");
const patientsService = require("../services/patientsService");

const getAllWorkouts = (req, res) => {
    const allWorkouts = patientsService.getAllWorkouts();
    res.send({status: "OK", data: allWorkouts});
};

const loginUser = (req, res) => {
    //User & Password from the request body
    const user = req.body.username;
    const password = req.body.password;
    //Call the service to login the user
    const existingUser = patientsService.loginUser(user, password);
    let response = {status: "404", data: existingUser};
    if (existingUser != null) {
        response = {status: "200", data: existingUser};
    }
    res.send(response);
}

const getUser = (req, res) => {
    const idUser = req.params.patientId;
    const user = patientsService.getUser(idUser);
    let response = {satus: "404", data: user};
    if (user != null){
        response = {status: "200", data: user};
    }
    res.send(response);
}

const getOneWorkout = (req, res) => {
    const workout = patientsService.getOneWorkout();
    res.send("Get an existing workout");
};

const createNewWorkout = (req, res) => {
    const createWorkout = patientsService.createNewWorkout();
    res.send("Create a new workout");
};

const updateOneWorkout = (req, res) => {
    const updateWorkout = patientsService.updateOneWorkout();
    res.send("Update an existing workout");
};

const deteleteOneWorkout = (req, res) => {
    patientsService.deteleteOneWorkout();
    res.send("Delete an existing workout");
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deteleteOneWorkout,
    loginUser,
    getUser
};