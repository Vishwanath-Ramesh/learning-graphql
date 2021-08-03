const { buildSchema, graphql } = require("graphql");

const schema = buildSchema(`
    type Query {
        hello: String
    }
`);

const root = {
  hello: () => "Hello world!",
};

graphql(schema, "{ hello }", root).then((response) => console.log(response));
