const swaggerAutogen = require("swagger-autogen")({
  openapi: "3.0.0",
  language: "en-US",
  disableLogs: false,
  autoHeaders: true,
  autoQuery: true,
  autoBody: true
});

const doc = {
  info: {
    version: "1.0.0",
    title: "Backend Functions",
    description: "Backend Functions do Marketplace - Portal do Seller"
  },
  host: "localhost:80",
  basePath: "/",
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  securityDefinitions: {
    api_key: {
      type: "apiKey",
      name: "api_key",
      in: "header"
    }
  }
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./endpoints/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc)
  .then(() => {
    require("./index");
  })
  .catch(() => {
    console.log("swagger error import.");
  });
