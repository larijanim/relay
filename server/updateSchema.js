const fs = require('fs');
const path = require('path');
const { schema } = require('./index');
const { printSchema } = require('graphql');

const schemaPath = path.resolve(__dirname, '../data/schema.graphql');

fs.writeFileSync(schemaPath, printSchema(schema));

console.log('Finished updating schema ' + schemaPath);