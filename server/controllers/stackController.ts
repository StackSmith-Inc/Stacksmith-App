import db from '../models/stackModel'
import express from 'express';
import { Request, Response, NextFunction } from 'express';


const techTableControllers: Record<string, (req: Request, res: Response, next: NextFunction) => Promise<void>> = {}; 

techTableControllers.getTechFrontend = async (req: Request, res: Response, next: NextFunction) => {
  console.log('we are in controllers')
  try{
    const getInfo: unknown = await db.query('SELECT * FROM techTable');
    res.locals.info = getInfo;
    return next();
  }
  catch (error){
    const errorObj = {
      log: error,
      status: 500,
      message: { err: 'An error occurred in getTechFrontend middleware.' },
    }
    return next(errorObj);
  }
}

export default techTableControllers;