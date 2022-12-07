const { Schema, model } = require("mongoose");

const salesSchema = new Schema(
    {
        price: {
            type: Number,
            required: true,
        },
        payMethod: {
            type: String,
            required: true,
        },
        note: {
            type: String,
        },
        status: {
            type: Boolean,
            required: true, 
        },
    },
    {
        timestamps: false,
        versionKey: false,
    }
);

const Sales = model('Sales', salesSchema)

module.exports = Sales