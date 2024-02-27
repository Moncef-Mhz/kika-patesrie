import { Schema, model, models } from "mongoose";

const orderSchema = new Schema(
  {
    items: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: Number,
        price: Number,
        name: String,
        image: String,
      },
    ],
    fullName: String,
    phoneNumber: String,
    wilaya: String,
    address: String,
    totalPrice: Number,
  },
  { timestamps: true }
);

const Order = models.Order || model("Order", orderSchema);
export default Order;
