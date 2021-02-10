const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        time: {
            type: Date,
            default: Date.now
        },
        routine: [{
            type: {
                type: String,
                trim: true,
                required: "Please enter an exercise type."
            },
            name: {
                type: String,
                trim: true,
                required: "Please enter an exercise name."
            },
            duration: {
                type: Number,
                required: "Please enter an exercise duration in minutes."
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }]
    }
);

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;