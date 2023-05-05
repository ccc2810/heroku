const Workout = require("../database/Workout");

const getAllWorkouts = () => {
    const allWorkouts = Workout.getAllWorkouts();
    return allWorkouts;
};

const loginUser = (username, password) => {
    const users = Workout.getAllUsers();
    let existingUser = null;
    users.forEach(user => {
        if (user.username === username && user.password === password) {
            existingUser = user.id;
        }
    });
    return existingUser;
}

const getAllUsers = () => {
    const allUsers = Workout.getAllUsers();
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
    getAllUsers,
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deteleteOneWorkout,
}