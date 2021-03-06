const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema(
    {
        season: {
            type: Number,
            required: true,
        },
        week: {
            type: Number,
        },
        homeTeam: {
            type: Number,
            required: true,
        },
        awayTeam: {
            type: Number,
            required: false,
        },
        homeTeamIdentifier: {
            type: Number,
            required: false,
        },
        awayTeamIdentifier: {
            type: Number,
            required: false,
        },
        homeTeamName: {
            type: String,
            required: false,
        },
        awayTeamName: {
            type: String,
            required: false,
        },
        homeTeamScore: {
            type: Number,
        },
        awayTeamScore: {
            type: Number,
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model('Game', gameSchema)
