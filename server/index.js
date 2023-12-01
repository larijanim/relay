
const http = require('http');
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');
const { createHandler } = require('graphql-http/lib/use/node');

const hostname = '127.0.0.1';
const port = 5000;

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'GreetingsQuery',
        fields: {
            greetings: {
                type: GraphQLString,
                resolve: () => 'Hello World from React- Graphql-Relay!',
            },
        },
    }),
});

const handler = createHandler({ schema });

const server = http.createServer((req, res) => {
    if (req.url.startsWith('/graphql')) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Request-Method', '*');
        res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
        res.setHeader('Access-Control-Allow-Headers', '*');
        if ( req.method === 'OPTIONS' ) {
            res.writeHead(200);
            res.end();
            return;
        }

        handler(req, res);
    } else {
        res.writeHead(200).end('Please, use /graphql suffix.');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = {
    schema
}
// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 5000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello Maryam from node');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });