const { gql } = require('apollo-server');

exports.typeDefs = gql`
  type Query {
    products: [Product!]!
    product(id: ID!): Product!
    categories: [Category!]!
    category(id: ID!): Category
    reviews: [Review!]!
    review(id: ID!): Review!
  }

  type Mutation {
    addCategory(input: AddCategoryInput!): Category!
  }

  type Product {
    id: ID!
    name: String
    description: String
    quantity: Int
    price: Float
    image: String
    onSale: Boolean
    category: Category
  }
  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Float!
    product: Product!
  }
  type Category {
    id: ID!
    name: String!
  }

  input AddCategoryInput {
    name: String!
  }
`;
