//add middleware here
// const fetcher = require('node-fetch');
import { Request, Response, NextFunction } from 'express';
require('dotenv').config()

const AIController :any = {};


// "what are the pros and cons of react, express, webpack, sequel in json format with data as first key and value as an array of objects with keys as name, pros, cons, and values as the name of the tech stack, pros of that tech stack in less than 50 words, cons of that tech stack in less than 50 words, and then second key as HowTheyWorkTogether and value as and object of what are the pros and cons of how  work together as a stack in a short list less than 50 words with each pros and cons as a key, and the third key as Companies and value as a top 10 list with just the companies and not the description"


AIController.call = async (req : Request, res : Response, next : NextFunction) => {
  console.log("Entering AIController");
  try {
    const techStacks = req.body.techStacks;
    const payload = {
      model: 'gpt-3.5-turbo',
      messages: [{role: "user", content: `Give me a json formatted object that gives the pros and cons of ${techStacks} and the pros and cons of how they work together in the following format: {data: [{name: first tech stack, pros: insert pros here in less than 50 words, cons:insert cons here in less than 50 words}, {name: second tech stack, pros: insert pros here in less than 50 words, cons:insert cons here in less than 50 words}, etc], HowTheyWorkTogether: {pros: insert pros here in less than 50 words, cons: insert cons here in less than 50 word}, Companies: [list of top 10 companies that use all of those technologies]}.`}]
    }
    const data : any = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer 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`
      },
      body: JSON.stringify(payload),
    });
    const response : any = await data.json();
    res.locals.techStacks = response.choices[0].message.content;
    console.log("res locals techStacks: ", res.locals.techStacks);
    return next();
  } catch (error) {
    return next(error)
  }
};

module.exports = AIController;