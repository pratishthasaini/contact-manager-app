const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
connectDb();
const app = express();
const port = process.env.PORT || 5000;
// created a middleware
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
// middle ware for user data
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
