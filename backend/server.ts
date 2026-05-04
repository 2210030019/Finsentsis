import express = require("express");
import dotenv = require("dotenv");

const authRoutes = require("./routes/auth.routes");
const contactRoutes = require("./routes/contact.routes");

import { logger } from "./utils/logger";
import { errorHandler } from "./middleware/error.middleware";

dotenv.config();

const app = express();

app.use(express.json());

//Add logger middleware
app.use(logger);

//Routes
app.use("/api/auth", authRoutes);
app.use("/api", contactRoutes);

//Add error handler LAST
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});