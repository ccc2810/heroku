const DB = require("./db.json");

const getAllWorkouts = () => {
    return DB.workouts;
}

const getAllUsers = () => {
    return DB.users;
}

module.exports = {
    getAllWorkouts,
    getAllUsers
};