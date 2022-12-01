const { Schema, model } = require("mongoose");

const providerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    service: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

const Provider = model('Provider', providerSchema)

module.exports = Provider