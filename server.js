const { ApolloServer, gql } = require('apollo-server');

const data = [
  {
    name: 'Rabbit',
    description: 'Rabbit is very great',
    color: 'white',
    onSale: true,
  },
];

const productsData = [
  {
    name: 'iPhone',
    price: 200,
    reviews: [{ name: 'Ye phone chori hai kiya gya h', rating: 0 }],
  },
];
const typeDefs = gql`
  type Query {
    hello: String
    price: Float
    isPresent: Boolean
    rollNo: Int
    animals: [Animal!]!
    products: [Product]!
  }

  type Animal {
    name: String!
    description: String!
    color: String!
    onSale: Boolean!
  }
  type Product {
    name: String!
    price: Float!
    reviews: [Review]!
  }
  type Review {
    name: String!
    rating: Float!
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world',
    price: () => 3.21,
    isPresent: () => true,
    rollNo: () => 3,
    animals: () => data,
    products: () => productsData,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
