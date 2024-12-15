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
const testConnection = async () => {
    try {
        const res = await pool.query('SELECT NOW()');
        console.log('Connection successful:', res.rows[0]);
    } catch (err) {
        console.error('Error executing query', err.stack);
    }
};

// Test the connection
testConnection();
