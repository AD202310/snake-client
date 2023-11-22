// setup interface to handle user input from stdin

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// \u0003 maps to ctrl+c input
const handleUserInput = function (key) {

  if(key === '\u0003') {
    process.exit();
  }
  if(key === 'w') {
    console.log("Move: up");
    connection.write("Move: up");
  }
  if(key === 'a') {
    console.log("Move: left");
    connection.write("Move: left");
  }
  if(key === 's') {
    console.log("Move: down");
    connection.write("Move: down");
  }
  if(key === 'd') {
    console.log("Move: right");
    connection.write("Move: right");
  }
  if(key === 'q') {
    connection.write("Say: Lets play!");
  }
};

module.exports = {setupInput};