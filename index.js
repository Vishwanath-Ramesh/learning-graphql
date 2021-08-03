const express = require("express");
const { buildSchema, graphql } = require("graphql");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");

const PORT = 5000 || process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());

const schema = buildSchema(`
    type Query {
        hello: String
    }
`);

const root = {
  hello: () => "Hello world",
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
