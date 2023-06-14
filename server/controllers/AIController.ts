//add middleware here
const fetcher = require('node-fetch');
import { Request, Response, NextFunction } from 'express';

const AIController :any = {};

AIController.call = async (req : Request, res : Response, next : NextFunction) => {
  try {
    const techStacks = req.body.techStacks;
    //request body: [react, webpack, express, sql]
    const payload = {
      model: 'gpt-3.5-turbo',
      messages: {role: "user", content: `what are the pros and cons of ${techStacks} in json format with data as first key and value as an array of objects with keys as name, pros, cons, and values as the name of the tech stack, pros of that tech stack in less than 50 words, cons of that tech stack in less than 50 words, and then second key as "HowTheyWorkTogether" and value as and object of what are the pros and cons of how  work together as a stack in a short list less than 50 words with each pros and cons as a key, and the third key as "Companies" and value as a top 10 list with just the companies and not the description`}
    }
    const data : any = await fetcher('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.YOUR_API_KEY}`
      },
      body: JSON.stringify(payload),
    });
    const response : any = await data.json();
  } catch (error) {
    return next(error)
  }
};

module.exports = AIController;