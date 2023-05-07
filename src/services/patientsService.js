const Patients = require("../database/Patients");

const getAllWorkouts = () => {
    const allWorkouts = Patients.getAllWorkouts();
    return allWorkouts;
};

const loginUser = (username, password) => {
    const users = Patients.getAllUsers();
    let existingUser = null;
    users.forEach(u => {
        if (u.username === username && u.password === password) {
            existingUser = u.id;
        }
    });
    return existingUser;
}

const getUser = (userId) => {
    const users = Patients.getAllUsers();
    let user = null;
    users.forEach(u => {
        if (u.id === userId) {
            user = {
                name: u.name,
                idKommunicate: u.idKommunicate || ""
            };
        }
    });
    return user
}

const getAllUsers = () => {
    const allUsers = Patients.getAllUsers();
    return allUsers;
};

const getOneWorkout = () => {
    return;
};

const createNewWorkout = () => {
    return;
};

const updateOneWorkout = () => {
    return;
};

const deteleteOneWorkout = () => {
    return;
};

module.exports = {
    loginUser,
    getUser,
    getAllUsers,
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deteleteOneWorkout,
}