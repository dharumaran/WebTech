import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String },
    rating: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 },
    description: { type: String },
    details: { type: String },
    stock: { type: String },
    shipping: { type: String },
    returns: { type: String }
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
