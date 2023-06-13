const { Pool } = require('pg')

const URI = 'postgres://cuyzknub:uWRJI3AaZc2U79x4HEhBaIwNts4oL-_F@fanny.db.elephantsql.com/cuyzknub';

//schema

module.exports = {
  query: (text:string, params:any, callback:any) => {
    console.log("executed query", text);
    return Pool.query(text, params, callback);
  },
};