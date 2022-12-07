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
      default: false,
    },
    admin: {
      type: Boolean,
      default: false,
    },
    reviews: {
      type: Array,
      default: [],
    },
    rating: Array,
    payMethod: Object,
    deleteLogic: {
      type: Boolean,
      default: false,
    },
    services: [
      {
        type: Schema.Types.ObjectId, ref: "Service" 
      }
    ]
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

// userSchema.set("toJSON", {
//   transform: (document, returnedObject) => {
//     returnedObject.id = returnedObject._id.toString();
//     delete returnedObject._id;
//   },
// });

const User = model("User", userSchema);

module.exports = User;
