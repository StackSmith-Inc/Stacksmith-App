import { Pool, QueryResult } from 'pg';


const URI = 'postgres://vwoaasil:MeehyIZw2nHkLwDL2x_cPKWE6nGENYmI@fanny.db.elephantsql.com/vwoaasil'

const pool = new Pool ({
    connectionString: URI
})

const query = (text: string, params?: any, callback?: any) => {
        console.log("executed query", text);
        return pool.query(text, params, callback)
    }
export default {query};

