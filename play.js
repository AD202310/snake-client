const {connect} = require('./client.js');
const {setupInput} = require('./input.js');

console.log("Connecting ...");
const connection = connect();
setupInput(connection);
