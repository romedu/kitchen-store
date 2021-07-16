import Product from "../models/Product";

export const getProducts = async (ctx) => {
  const { page = 1 } = ctx.request.query;
  const paginationOptions = {
    page,
    limit: 5,
    select: ["_id", "name", "price", "image"],
  };
  const queryResult = await Product.paginate({}, paginationOptions);
  const { docs: products, ...paginationData } = queryResult;

  ctx.status = 200;
  ctx.body = {
    products,
    paginationData,
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
