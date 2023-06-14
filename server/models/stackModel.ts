const { Pool } = require('pg')

const URI = 'postgres://vwoaasil:MeehyIZw2nHkLwDL2x_cPKWE6nGENYmI@fanny.db.elephantsql.com/vwoaasil'

const pool = new Pool ({
    connectionString: URI
})

//add schema here

module.exports = {
    query: (text: String, params: String, callback: any) => {
        console.log("executed query", text);
        return pool.query(text, params, callback)
    }
}

