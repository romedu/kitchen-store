import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [1, "Only between 1 and 100 characters are allowed"],
    maxlength: [100, "Only between 1 and 100 characters are allowed"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  image: {
    type: String,
    required: [true, "Image is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "The price must be at least 0"],
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Product", productSchema);
