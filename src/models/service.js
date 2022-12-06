const { Schema, model } = require("mongoose");

const serviceSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    availability: {
      type: String,
      required: true,
    },
    online: {
      type: String,
      required: true,
      default: false,
    },
    price: {
      type: Number,
      required: true,
    },
    reviews: {
      type: Array,
      default: [],
    },
    rating: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

serviceSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
  },
});

const Service = model("Service", serviceSchema);

module.exports = Service;
