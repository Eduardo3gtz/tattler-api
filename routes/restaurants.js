const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');

// @desc    Obtener todos los restaurantes
// @route   GET /api/restaurants
router.get('/', async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error del Servidor');
  }
});

// @desc    Obtener un solo restaurante por su ID
// @route   GET /api/restaurants/:id
router.get('/:id', async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);

    if (!restaurant) {
      return res.status(404).json({ msg: 'Restaurante no encontrado' });
    }

    res.json(restaurant);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error del Servidor');
  }
});

// @desc    Crear un nuevo restaurante
// @route   POST /api/restaurants
router.post('/', async (req, res) => {
  try {
    const newRestaurant = await Restaurant.create(req.body);
    res.status(201).json(newRestaurant);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error del Servidor');
  }
});

module.exports = router;