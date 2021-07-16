import Product from "../models/Product";

export const getProducts = async (ctx) => {
  const fieldsToReturn = "_id name price image";
  const products = await Product.find({}, fieldsToReturn);

  ctx.status = 200;
  ctx.body = {
    products,
  };
};

export const getProductById = async (ctx) => {
  const { productId } = ctx.params;
  const foundProduct = await Product.findById(productId);

  ctx.status = 200;
  ctx.body = {
    product: foundProduct,
  };
};
