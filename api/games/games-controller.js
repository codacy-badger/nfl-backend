const boom = require('@hapi/boom')

const gameModel = require('./game')

exports.getGames = async (req, reply) => {
    try {
      const games = await gameModel.find()
      return games
    } catch (err) {
      throw boom.boomify(err)
    }
  }
  
  // Get single Game by ID
  exports.getOneGame = async (req, reply) => {
    try {
      const id = req.params.id
      const game = await gameModel.findById(id)
      return game
    } catch (err) {
      throw boom.boomify(err)
    }
  }
  
  // Add a new Game
  exports.addGame = async (req, reply) => {
    try {
      const game = new gameModel(req.body)
      return game.save()
    } catch (err) {
      throw boom.boomify(err)
    }
  }
  
  // Update an existing Game
  exports.updateGame = async (req, reply) => {
    try {
      const id = req.params.id
      const game = req.body
      const { ...updateData } = game
      const update = await gameModel.findByIdAndUpdate(id, updateData, { new: true })
      return update
    } catch (err) {
      throw boom.boomify(err)
    }
  }
  
  // Delete a Game
  exports.deleteGame = async (req, reply) => {
    try {
      const id = req.params.id
      const game = await gameModel.findByIdAndRemove(id)
      return game
    } catch (err) {
      throw boom.boomify(err)
    }
  }

  // Delete all Game
  exports.deleteAllGame = async (req, reply) => {
    try {
      const game = await gameModel.deleteMany({})
      return
    } catch (err) {
      throw boom.boomify(err)
    }
  }

