import express from 'express';
import controller from './controllers/stackController'
import { Request, Response, NextFunction } from 'express';

const app = express();
// eslint-disable-next-line @typescript-eslint/no-var-requires
const AIController = require('./controllers/AIController')
const PORT = 3000;


app.use(express.json());
app.use(express.urlencoded({extended: true}));

//add routes here
app.get('/api/frontend', controller.getTechFrontend, (req: Request, res: Response) => {
  return res.status(200).send(res.locals.info);
})

app.get('/api/test', (req: Request, res: Response) => {
  return res.status(200).send('hi');
})

app.post('/api/openai', AIController.call, async(req: Request, res: Response) => {
  return res.status(200).json(res.locals.techStacks);
})

app.use('*', controller.getTechFrontend, (req: Request, res: Response) => {
    res.sendStatus(404);
  });

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
    const defaultErr = {
      log: 'Express error handler hii caught unknown middleware error',
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

