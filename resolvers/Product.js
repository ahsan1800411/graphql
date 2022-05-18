exports.Product = {
  category: ({ categoryId }, args, { db }) =>
    db.categories.find((category) => category.id === categoryId),
};
