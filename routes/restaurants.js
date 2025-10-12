const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');

// @desc    Obtener todos los restaurantes Y FILTRAR
// @route   GET /api/restaurants
router.get('/', async (req, res) => {
  try {
    // LÓGICA DE FILTRADO
    const { rating, price_range } = req.query;
    const queryObject = {};

    if (rating) {
      // Si nos piden rating, filtramos por restaurantes con calificación mayor o igual a la pedida
      queryObject.rating = { $gte: Number(rating) };
    }

    if (price_range) {
      // Si nos piden rango de precios, filtramos por ese valor exacto
      queryObject.price_range = price_range;
    }

    const restaurants = await Restaurant.find(queryObject);
    res.json(restaurants);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error del Servidor');
  }
});

// @desc    Buscar restaurantes por texto
// @route   GET /api/restaurants/search
router.get('/search', async (req, res) => {
    try {
        const query = req.query.q; // Obtiene el término de búsqueda de la URL (ej. ?q=sushi)

        const restaurants = await Restaurant.find({
            $text: { $search: query }
        });

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

// @desc    Actualizar un restaurante
// @route   PUT /api/restaurants/:id
router.put('/:id', async (req, res) => {
    try {
        const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, {
            new: true, // Devuelve el documento modificado
            runValidators: true // Corre las validaciones del Schema
        });

        if (!restaurant) {
            return res.status(404).json({ msg: 'Restaurante no encontrado' });
        }

        res.json(restaurant);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del Servidor');
    }
});

// @desc    Eliminar un restaurante
// @route   DELETE /api/restaurants/:id
router.delete('/:id', async (req, res) => {
    try {
        const restaurant = await Restaurant.findByIdAndDelete(req.params.id);
        if (!restaurant) {
            return res.status(404).json({ msg: 'Restaurante no encontrado' });
        }
        res.json({ msg: 'Restaurante eliminado correctamente' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del Servidor');
    }
});



module.exports = router;