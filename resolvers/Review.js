exports.Review = {
  product: ({ productId }, args, { db }) =>
    db.products.find((product) => product.id === productId),
};
