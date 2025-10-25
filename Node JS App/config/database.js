const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: 'hostname',
  port: '5432',
  database: 'demo',
  user: 'demo_owner',
  password:'password',
  ssl: {
    rejectUnauthorized: false, // allow self-signed certificates (needed for many cloud DBs)
  },
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 20000, // Increased to 20 seconds
  query_timeout: 30000, // 30 second query timeout
  statement_timeout: 30000, // 30 second statement timeout
});

// Test the connection
pool.on('connect', () => {
  console.log('Connected to PostgreSQL database');
});

pool.on('error', (err) => {
  console.error('Database connection error:', err);
  console.error('Error details:', {
    code: err.code,
    message: err.message,
    stack: err.stack
  });
});

// Add connection testing function
const testConnection = async () => {
  try {
    const client = await pool.connect();
    console.log('Database connection test successful');
    client.release();
    return true;
  } catch (err) {
    console.error('Database connection test failed:', err);
    return false;
  }
};

module.exports = { pool, testConnection };
