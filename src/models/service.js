const { Schema, model } = require("mongoose");

const serviceSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      secure_url: String,
      public_id: String
    },
    description: {
      type: String,
      required: true,
    },
    // availability: {
    //   type: String,
    //   required: true,
    // },
    online: {
      type: Boolean,
      // required: true,
      // default: false,
    },
    // price: {
    //   type: Number,
    //   // required: true,
    // },
    reviews: {
      type: Array,
      default: [],
    },
    rating: {
      type: Array,
      default: [],
    },
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

const Service = model("Service", serviceSchema);

module.exports = Service;
