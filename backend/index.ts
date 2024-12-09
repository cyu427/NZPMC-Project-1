import express, { json } from "express";
import cors from "cors";
import { config } from "dotenv";
import mongoose from "mongoose";
config();

// Import Routers
import userDetailsRoute from "./routes/userDetailsRoute";
import userAuthenticationRoute from "./routes/userAuthenticationRoute";
import eventRoute from "./routes/eventRoute";
import adminUserRoute from "./routes/adminUserRoute";
import adminEventRoute from "./routes/adminEventRoute";
import schoolRoute from "./routes/schoolRoute";

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

// Connect to database
mongoose.set('strictQuery', false)
const url = process.env.MONGODB_URI;
if (!url) {
  throw new Error("MONGODB_URI is not defined in the environment variables.");
}
console.log('connecting to', url)
mongoose.connect(url)
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch(error => {
    console.log('error connecting to MongoDB:', error.message)
  })

// Routes
app.use("/user-details", userDetailsRoute);
app.use("/user-auth", userAuthenticationRoute);
app.use("/event", eventRoute);
app.use("/admin-user", adminUserRoute);
app.use("/admin-event", adminEventRoute);
app.use("/school", schoolRoute);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});