const express = require("express");
const { Client } = require("pg");
const cors = require("cors");
const app = express();
const port = 5000;

// Define server URL
const SERVER_URL = process.env.REACT_APP_API_URL;

// Middleware for parsing JSON
app.use(express.json());
app.use(cors());

// PostgreSQL connection
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'russian-sauna',
  password: 'szaq12345',
  port: 5432, // Default PostgreSQL port
});

// Connect to the database
client.connect();

// Root route (this will handle the "Cannot GET /" error)
app.get("/", (req, res) => {
  res.send("Welcome to the Russian Sauna API!");
});

// Create the slides table if it doesn't exist
const createSlidesTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS slides (
      id SERIAL PRIMARY KEY,
      image_url VARCHAR(255) NOT NULL,
      title VARCHAR(255) NOT NULL,
      description TEXT,
      button_text VARCHAR(255),
      button_color VARCHAR(50)
    );
  `;
  await client.query(query);
};

// Call the createSlidesTable function when the server starts
createSlidesTable().catch((err) => console.error("Error creating table:", err));

// Route to fetch all slides
app.get("/api/slides", async (req, res) => {
  try {
    const result = await client.query("SELECT * FROM slides");
    res.json(result.rows); // Return the rows as JSON response
  } catch (error) {
    console.error("Error fetching slides:", error);
    res.status(500).send("Error fetching slides");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on ${SERVER_URL}`);
});
