const { time } = require("console");
const net = require("net");
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "10.0.2.15", // IP address here,
    port: "50541" // PORT number here,
  });

  conn.on("connect", () => {
    console.log('Successfully connected to game server');
    conn.write('Name: WAR');



   
  setTimeout(() => {
    setInterval(() => {
     conn.write("Move: up")
      
    }, 50)
  }, 800) 
  

  });

  conn.on("data",(data) => {
     console.log("server says" , data);
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.write("Move: up")
 
  
  return conn;
};

console.log("Connecting ...");
connect();


module.exports = {connect};
