const db = require('../models/stackModel');
import {Request, Response, NextFunction } from 'express';


const techTableControllers: any = {} 

techTableControllers.getTechFrontend = async (req: Request, res: Response, next: NextFunction) => {
  try{
    const getInfo: any = await db.query('SELECT * FROM techTable WHERE techtype = "Frontend"');
    res.locals.info = getInfo;
    return next();
  }
  catch (error){
    let errorObj = {
      log: error,
      status: 400,
      message: { err: 'An error occurred in getTechFrontend middleware.' },
    }
    return next(errorObj);
  }
}


// starWarsController.getCharacters = (req, response, next) => {
//   // write code here
//   const qString = 'SELECT * FROM people ';
//   // const peopleAndSpecies = 'SELECT people.*, species.name AS species FROM people LEFT OUTER JOIN species ON people.species_id = species._id';
//   const peopleAndSpecies = 'SELECT people.*, species.name AS species, planets.name AS planets FROM people LEFT OUTER JOIN species ON people.species_id = species._id LEFT OUTER JOIN planets ON people.homeworld_id = planets._id';
//   db.query(peopleAndSpecies,(err, result)  =>  {
//     if (err)  {
//       const errObj = {
//         log: 'Express error handler caught unknown middleware error',
//         status: 500,
//         message: { err: 'An error occurred' },
//       };
//       return next(errObj);
//     }
//     response.locals.people = result.rows;
//     next();
//   });
// };

module.exports = techTableControllers;