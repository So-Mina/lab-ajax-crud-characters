const router = require('express').Router()
const Character = require('../models/Character.model')
const axios = require('axios')

/**
 * !All the routes here are prefixed with /api/characters
 */

/**
 * ? This route should respond with all the characters
 * CODE 200 : OK
 */
router.get('/', async (req, res, next) => {
	try {
		const allCharacters = await Character.find()
		res.status(200).json(allCharacters)
	} catch (error) {
		next(error)
	}
})

/**
 * ? This route should create one character and respond with
 * ? the created character
 * code 201 : CREATED
 */
router.post('/', async (req, res, next) => {
	try {
		/* const {name, occupation, weapon, cartoon} = req.body
		 	const createCharacter = await Character.create(req.body) */
		/* const charData = {name, occupation, weapon, cartoon}
			const createCharacter = await Character.create(charData) */
		const characterToCreate = {...req.body}
		const createCharacter = await Character.create(characterToCreate)
		res.status(201).json(createCharacter)
	} catch (error) {
		next({ errorMessage: 'Invalid or missing field'})
	}
})

/**
 * ? This route should respond with one character
 */
router.get('/:id', async (req, res, next) => {
	/* const {id} = req.params
		const idChar = req.params.id */
	try {
		const oneCharacter = await Character.findById(req.params.id)
		res.json(oneCharacter)
	} catch (error) {
		next(error)
	}
})

/**
 * ? This route should update a character and respond with
 * ? the updated character
 */

router.patch('/:id', async (req, res, next) => {
  const { characterId } = req.params
  const characterToUpdate = { ...req.body }
  try {
		const updatedCharacter = await Character.findByIdAndUpdate(characterId, characterToUpdate, {new: true})
		res.status(202).json(updatedCharacter)
  } catch (error) {
    next(error)
  }
})

/**
 * ? Should delete a character and respond with a success or
 * ? error message
 */
router.delete('/:id', async (req, res, next) => {
	try {
		await Character.findByIdAndDelete(req.params.id)
      res.json({message: `${req.params.id} has been successfully deleted`})
    } catch (error) {
		next(error)
	}
})

module.exports = router