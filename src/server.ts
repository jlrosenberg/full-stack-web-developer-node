import express from 'express';
import helloController from './controllers/helloController';
import userController from './controllers/usersController';
import cors from 'cors';
import tuitsController from './controllers/tuitsController';

const app = express();
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