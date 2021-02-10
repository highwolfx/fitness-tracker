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

    app.post('/api/workouts', (req,res) => {
        db.Workout.create({type: 'workout'})
        .catch(err => {
            res.json(err);
        });
    });

    app.put('/api/workouts/:id', ({body, params}, res) => {
        const reqID = params.id;
        var saved = [];

        db.Workout.find({_id: reqID})
        .then(response => {
            saved = response[0].exercises;
            res.json(response[0].exercises);
            var allSaved = [...saved, body];
            updateWorkout(allSaved);
        })
        .catch(err => {
            res.json(err);
        });

        function updateWorkout(exercises){
            db.Workout.findByIdAndUpdate(reqID, {exercises: exercises}, (err, doc) => {
                if (err){
                    console.log(err);
                };
            });
        };
    })

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    }); 
}