import { Schema, model, models } from "mongoose";

const productSchema = new Schema(
  {
    name: String,
    slug: String,
    categories: [String],
    price: String,
    description: String,
    image: String,
    inStock: String,
  },
  { timestamps: true }
);

const Product = models.Product || model("Product", productSchema);
export default Product;
