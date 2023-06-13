const pg = require('pg');
const express = require('express');
const app = express();
const PORT = 3000;
import { Request, Response, NextFunction, RequestHandler } from 'express';


app.use(express.json());
app.use(express.urlencoded());

//add routes


app.use('*', (req : Request, res: any) => {
    res.sendStatus(404);
  });

app.use((err: Object, req: Request, res: Response, next: any) => {
    const defaultErr = {
      log: 'Express error handler hiiiiii caught unknown middleware error',
      status: 400,
      message: { err: 'An error global occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

app.listen(PORT, () => {
    console.log('listening on port: ', PORT)
});
