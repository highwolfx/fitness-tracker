const db = require('../models');

module.exports = function (app) {
    app.get("/api/workouts", (req,res) => {
        db.Workout.find({})
        .then(workouts => {
            res.json(workouts);
        })
        .catch(err => {
            res.json(err);
        });
    });
}