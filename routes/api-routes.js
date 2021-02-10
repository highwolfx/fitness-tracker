const db = require('../models');

module.exports = function (app) {
    app.get('/api/workouts', (req,res) => {
        db.Workout.find({})
        .then(workouts => {
            res.json(workouts);
        })
        .catch(err => {
            res.json(err);
        });
    });

    app.post('/api/workouts', async (req,res) => {
        try{
           const response = await db.Workout.create({type: 'workout'});
           res.json(response);
        } catch (err) {
            console.log("An error has occured: ", err);
        };
    });
}