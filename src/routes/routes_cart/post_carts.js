const express = require('express');
const Cart = require('./cart-model'); // Importamos el modelo de carrito de compras

const router = express.Router();

router.post('/cart', async (req, res) => {
  try {
    // Creamos un nuevo carrito de compras a partir de la información enviada en la petición
    const newCart = new Cart({
      services: req.body.services,
      totalPrice: req.body.totalPrice,
      purchaseDate: req.body.purchaseDate,
    });

    // Guardamos el nuevo carrito de compras en la base de datos
    const savedCart = await newCart.save();

    // Enviamos una respuesta con el carrito de compras guardado
    res.send(savedCart);
  } catch (error) {
    // Si hay un error, enviamos un mensaje de error
    res.status(500).send({ message: 'Ocurrió un error al guardar el carrito de compras.' });
  }
});

module.exports = router;
