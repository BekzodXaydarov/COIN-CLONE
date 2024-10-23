const express = require("express");
const sequelize = require("./config/database");
const setupSwagger = require("./swagger/swagger");
const cors = require("cors")

const app = express();

app.use(express.json());
app.use(cors())

const admin = require("./routes/admin.route");
app.use("/api", admin);

const teacher = require("./routes/teacher.route")
app.use("/api",teacher)

setupSwagger(app);

const PORT = process.env.PORT || 8989;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`app is listening http://localhost:${PORT}/api-docs`);
  });
});
