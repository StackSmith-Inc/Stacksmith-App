const { Pool } = require('pg')

const URI = 'postgres://cuyzknub:uWRJI3AaZc2U79x4HEhBaIwNts4oL-_F@fanny.db.elephantsql.com/cuyzknub'

const pool = new Pool ({
    connectionString: URI
})

//add schema here

module.exports = {
    query: (text: string, params: string, callback: any) => {
        console.log("executed query", text);
        return pool.query(text, params, callback)
    }
}

