const net = require("net");
// establishes a connection with the game server

 connect = function () {
  const conn = net.createConnection({
    host: "10.0.2.15", // IP address here,
    port: "50541" // PORT number here,
  });
conn.on("connect", () => {
console.log("succesfully conected to server")


});

conn.on("data",(data) => {
console.log("server says" , data)

});
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();
