const { Schema, model } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const ordersSchema = new Schema(
    {
        purchaseId: {type: String, required: true },
        // servicesId: Array,
        status: String,
        userMail: String,
        services: [
            {
              type: Schema.Types.ObjectId,
              ref: "Service",
            },
          ],
        buyerId: { type: Schema.Types.ObjectId, ref:"User" }
    },
    {
        timestamps: false,
        versionKey: false,
    }
);

ordersSchema.plugin(uniqueValidator)

const Orders = model("Orders", ordersSchema);

module.exports = Orders