import express, { json } from "express";
import './db/mongoose.mjs';
import * as userRouter from "./routers/user.js";
import * as taskRouter from "./routers/task.js";
import * as expressWinston from "express-winston";
import logger from "./logger/logger.js";

const app = express ();
const port = process.env.PORT;

app.use(express.json());
app.use(userRouter.router);
app.use(taskRouter.router);
app.use(
    expressWinston.logger({
      winstonInstance: logger,
      statusLevels: true,
    })
  );

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})