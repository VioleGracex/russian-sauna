const { Pool } = require('pg');

// Database configuration
const pool = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'cms_db',
  password: 'your_password',
  port: 5432, // Default PostgreSQL port
});

module.exports = pool;
