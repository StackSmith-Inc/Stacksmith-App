import { Pool, QueryResult } from 'pg';
require('dotenv').config();


const URI = process.env.PG_URI

const pool = new Pool ({
    connectionString: URI
})

const query = (text: string, params?: any, callback?: any) => {
        console.log("executed query", text);
        return pool.query(text, params, callback)
    }
export default {query};

