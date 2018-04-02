const db = require('../database/index.js');
const graphQLTools = require('graphql-tools');
const graphQLSubs = require('graphql-subscriptions');

const withFilter = graphQLSubs.withFilter;

const PubSub = require('graphql-subscriptions');

const pubsub = new PubSub.PubSub();

let tempMessages = {
  'fdb6af47-649a-4e83-8469-61cde9697c3b' : ['I love you'],
};

const typeDefs = `
  type Query {
    user(id: String!): User
    allUsers: [User]
    listing(id: String!): Listing
    allListings(category: String): [Listing]
    problemMessages(id: String!): Messages
  }

  type User {
    id: String
    username: String
    email: String
    avg_rating: String
    rating_count: Int
    city: String
    phone_number: String
    num: String
  }

  type Listing {
    id: String
    user_id: String
    title: String
    description: String
    category: String
    location: String
    image: String
  }

  type Message {
    id: String
    messages: [String]
  }

  type Messages {
    id: String
    messages: [String]
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User!
    createListing(title: String!, description: String!, category: String!, location: String!): Listing!
    deleteUser(id: String!): User
    deleteListing(id: String!): Listing
    addMessage(id: String!, text: String!): Message
  }

  type Subscription {
    listingAdded: Listing
    messageAdded(id: String!): Message
  }

  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`;

const resolvers = {
  Query: {

    user: (obj, args, context) =>
      db.users.find({
      where: args,
    }),
    allUsers: (obj, args, context) =>
      db.users.findAll(),
    listing: (obj, args, context) => db.listings.find({
      where: args,
    }),
    allListings: (obj, args, context) => db.listings.findAll({
      where: args,
      limit: 25,
    }),
    problemMessages: (obj, args, context) => {
      const messages = tempMessages[args.id] ? {id: args.id, messages: tempMessages[args.id]} : {id: args.id, messages: []};
      return messages;
    }
  },
  Mutation: {
    createUser: (obj, args, context) => db.users.create(args),
    createListing: (obj, args, context) => {
      const newListing = db.listings.create(args);
      pubsub.publish('listingAdded', { listingAdded: newListing });
      return newListing;
    },
    deleteUser: (obj, args, context) => db.users.destroy({
      where: obj,
    }),
    deleteListing: (obj, args, context) => db.listings.destroy({
      where: obj,
    }),
    addMessage: (obj, args, context) => {
      if (tempMessages[args.id]) {
        tempMessages[args.id].push(args.text);
      } else {
        tempMessages[args.id] = [args.text];
      }
      let newMessage = {id: args.id, messages: [args.text]};
      pubsub.publish('messageAdded', { messageAdded: newMessage, id: args.id });
      return newMessage;
    }
  },
  Subscription: {
    listingAdded: {
      subscribe: () => pubsub.asyncIterator('listingAdded'),
    },
    messageAdded: {
      subscribe: withFilter(() => pubsub.asyncIterator('messageAdded'), (payload, variables) => {
        return payload.id === variables.id;
      }),
    }
  }
};

const schema = graphQLTools.makeExecutableSchema({ typeDefs, resolvers });
module.exports = schema;
