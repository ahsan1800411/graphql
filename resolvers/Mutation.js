const { v4: uuidv4 } = require('uuid');
exports.Mutation = {
  addCategory: (parent, { input }, { db }) => {
    const { name } = input;
    const newCategory = {
      id: uuidv4(),
      name,
    };
    db.categories.push(newCategory);
    return newCategory;
  },
  addProduct: (parent, { input }, { db }) => {
    const { name, description, quantity, price, image, onSale, categoryId } =
      input;
    const newProduct = {
      id: uuidv4(),
      name,
      description,
      quantity,
      price,
      image,
      onSale,
      categoryId,
    };
    db.products.push(newProduct);
    return newProduct;
  },
};

// mutation{
//   addProduct(input:{name:"iPhone",
//     categoryId:"c01b1ff4-f894-4ef2-b27a-22aacc2fca70",
//     description:"iPhone is bad",
//     image:"image",
//     onSale:false,
//     price:1,
//     quantity:2}

//     )
//     {
//       image
//       name
//     }
// }
