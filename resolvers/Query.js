exports.Query = {
  products: (parent, args, { db }) => db.products,
  product: (parent, { id }, { db }) =>
    db.products.find((product) => product.id === id),
};
