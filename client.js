const { time } = require("console");
const { IP, PORT } = require("./constants");
const net = require("net");
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on("connect", () => {
    console.log('Successfully connected to game server');
    conn.write('Name: WAR')
    
  });

  conn.on("data",(data) => {
     console.log("server says" , data);
    
  });

  conn.setEncoding("utf8");
  
 
  
  return conn;
};

module.exports = {connect};
