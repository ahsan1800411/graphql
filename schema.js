const { gql } = require('apollo-server');

exports.typeDefs = gql`
  type Query {
    products: [Product!]!
    product(id: ID!): Product!
  }

  type Product {
    id: ID!
    name: String
    description: String
    quantity: Int
    price: Float
    image: String
    onSale: Boolean
  }
`;
