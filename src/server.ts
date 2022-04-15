import express from 'express';
import helloController from './controllers/helloController';
import userController from './controllers/usersController';
import cors from 'cors';
import tuitsController from './controllers/tuitsController';
import mongoose from 'mongoose';

const app = express();
const dbConn = process.env.DB_CONNECTION_STRING ?? 'mongodb://localhost:27017/webdev';
mongoose.connect(dbConn);

app.use(express.json({
  type: "*/*" // optional, only if you want to be sure that everything is parsed as JSON. Wouldn't recommend
}))
app.use(express.urlencoded());
app.use(cors());

const port = process.env.PORT ?? 4000

helloController(app);
userController(app);
tuitsController(app)
app.listen(port);