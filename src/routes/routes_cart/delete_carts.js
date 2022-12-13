const express = require('express');
const Cart = require('../../models/cart'); // Importamos el modelo de carrito de compras

const router = express.Router();

router.delete('/carts/:id', async (req, res) => {
  try {
    // Buscamos el carrito de compras con el id especificado en la ruta
    const cart = await Cart.findById(req.params.id);

    // Eliminamos el carrito de compras de la base de datos
    await cart.remove();

    // Enviamos una respuesta indicando que el carrito de compras ha sido eliminado correctamente
    res.send({ message: 'Carrito de compras eliminado correctamente.' });
  } catch (error) {
    // Si hay un error, enviamos un mensaje de error
    res.status(500).send({ message: 'Ocurrió un error al eliminar el carrito de compras.' });
  }
});

module.exports = router;

