const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: String,
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    city: String,
    address: String,
    phone: String,
    provider: {
      type: Boolean,
      default: false
    },
    admin: {
      type: Boolean,
      default: false
    },
    reviews: Object,
    rating: Array,
    payMethod: Object,
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

const User = model('User', userSchema)

module.exports = User