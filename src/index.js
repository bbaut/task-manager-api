import express, { json } from "express";
import './db/mongoose.mjs';
import * as userRouter from "./routers/user.js";
import * as taskRouter from "./routers/task.js";
// import bcrypt from 'bcryptjs'
// import jwt from 'jsonwebtoken';

const app = express ();
const port = process.env.PORT;

app.use(express.json());
app.use(userRouter.router);
app.use(taskRouter.router);

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})