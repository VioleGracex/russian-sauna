const express = require("express");
const bodyParser = require("body-parser");
const pool = require("./db");
const app = express();
const port = 5000;

app.use(bodyParser.json());

// Get all slides
app.get("/api/slides", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM slides ORDER BY id");
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// Add a new slide
app.post("/api/slides", async (req, res) => {
    const { image_url, title, description, button_text, button_color } = req.body;
    try {
        const result = await pool.query(
            "INSERT INTO slides (image_url, title, description, button_text, button_color) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [image_url, title, description, button_text, button_color]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// Update a slide
app.put("/api/slides/:id", async (req, res) => {
    const { id } = req.params;
    const { image_url, title, description, button_text, button_color } = req.body;
    try {
        const result = await pool.query(
            "UPDATE slides SET image_url = $1, title = $2, description = $3, button_text = $4, button_color = $5, updated_at = CURRENT_TIMESTAMP WHERE id = $6 RETURNING *",
            [image_url, title, description, button_text, button_color, id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// Delete a slide
app.delete("/api/slides/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query("DELETE FROM slides WHERE id = $1", [id]);
        res.send("Slide deleted successfully");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
