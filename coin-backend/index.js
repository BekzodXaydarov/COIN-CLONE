const express = require("express");
const sequelize = require("./config/database");
const setupSwagger = require("./swagger/swagger");

const app = express();

app.use(express.json());

const admin = require("./routes/admin.route");
app.use("/api", admin);

setupSwagger(app);

const PORT = process.env.PORT || 8989;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`app is listening http://localhost:${PORT}/api-docs`);
  });
});
