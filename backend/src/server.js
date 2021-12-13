"use strict";

const http = require("http");

const dotenv = require("dotenv");
const result = dotenv.config({ path: "src/.env" });

if (result.error) {
  throw result.error;
}
const { parsed: envs } = result;
console.log(envs);

const app = require("../src/app");

// Criar arquivo .env na pasta src com as variáveis PORT, BD_PASSWORD, BD_URL e BD_PORT

const port = normalizePort(process.env.PORT);
app.set("port", port);

const server = http.createServer(app);
server.on("error", onError);

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;

    case "EADDRINUSE":
      console.error(bind + " already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}
server.listen(port);
console.log("API rodando na porta " + port);
