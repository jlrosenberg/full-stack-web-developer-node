import express from 'express';
import helloController from './controllers/helloController';
import userController from './controllers/usersController';
import cors from 'cors';
import tuitsController from './controllers/tuitsController';

const app = express();
app.use(express.json());
app.use(cors());


const port = process.env.APP_PORT ?? 4000

helloController(app);
userController(app);
tuitsController(app)
app.listen(port);