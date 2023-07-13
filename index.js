const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const { serve: swaggerServe, setup: swaggerSetup} = require("swagger-ui-express");

const swaggerFile = require("./swagger-output.json");
const corsFile = require("./utils/cors.json");

const app = express();

app.use(bodyParser.json());
app.use(cors(corsFile));
app.use("/doc", swaggerServe, swaggerSetup(swaggerFile));

app.listen(80, () => {
  console.log("Server is running!\nAPI documentation: http://localhost:80/doc");
});

require("./endpoints")(app);
