exports.Query = {
  products: (parent, args, { db }) => db.products,
  product: (parent, { id }, { db }) =>
    db.products.find((product) => product.id === id),
  categories: (parent, args, { db }) => db.categories,
  category: (parent, { id }, { db }) =>
    db.categories.find((category) => category.id === id),
};
