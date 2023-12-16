const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const dbConnect = require("./config/dbConnect");
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");
const userRoute = require("./routes/users/usersRoute");
const incomeRoute = require("./routes/income/incomeRoutes");
const expensesRoute = require("./routes/expenses/expenseRoutes");
const accountStatsRoute = require("./routes/accountStatsRoute/accountStatsRoute");
const app = express();
const webpush = require('web-push');
require('dotenv').config();

// const webpush = require('web-push')

//env
dotenv.config();
//dbConnect
dbConnect();

//middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ msg: "Welcome Expenses tracker API" });
});
// users routes
app.use("/api/users", userRoute);

// webpush.setVapidDetails(process.env.WEB_PUSH_CONTACT, process.env.PUBLIC_VAPID_KEY, process.env.PRIVATE_VAPID_KEY)

//account stats
app.use("/", accountStatsRoute);
//income routes
app.use("/api/income", incomeRoute);
//expenses Route
app.use("/api/expenses", expensesRoute);

//Error
app.use(notFound);
app.use(errorHandler);

//income
//expenses

module.exports = app;
