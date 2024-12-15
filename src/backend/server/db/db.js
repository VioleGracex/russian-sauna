const { Pool } = require('pg');

// Database configuration
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'russian-sauna',
    password: 'szaq12345',
    port: 5432, // Default PostgreSQL port
});

// Test the connection
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Error executing query', err.stack);
    } else {
        console.log('Connection successful:', res.rows[0]);
    }
});
