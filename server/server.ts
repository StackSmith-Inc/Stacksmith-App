const pg = require('pg');
const express = require('express');
const app = express();
import { Request, Response, NextFunction, RequestHandler } from 'express';
const AIController = require('./controllers/AIController')
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//add routes here

app.post('/api/openai', AIController.call, async(req: Request, res: Response) => {
  return res.status(200).json(res.locals.techStacks);
})

app.use('*', (req: Request, res: Response) => {
    res.sendStatus(404);
  });
app.use((req: Request, res: Response, err: object, next: NextFunction) => {
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

