const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};
const handleUserInput = function () {
  stdin.on("data", handleUserInput);
  if (key === '\u0003') {
    process.stdout.write('Terminated');
    process.stdout.write('\n');
    process.exit();
  }
  handleUserInput();
  return stdin;
  };
 
  module.exports = {setupInput};