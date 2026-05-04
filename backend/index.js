import "dotenv/config";

console.log("INDEX ENV:", process.env.MONGO_URL); // 👈 check here

import "./src/server.js";