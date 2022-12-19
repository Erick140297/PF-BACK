const mongoose = require('mongoose');

// Definimos el esquema para nuestro modelo de carrito de compras
const cartSchema = new mongoose.Schema({
  services: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
  }],
  totalPrice: {
    type: Number,
    required: true,
  },
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
  user:{
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

// Creamos el modelo a partir del esquema
const Cart = mongoose.model('Cart', cartSchema);

// Exportamos el modelo para poder utilizarlo en otros archivos de nuestro proyecto
module.exports = Cart;