const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

// Endpoint to get all posts
app.get("/posts", async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    res.json(response.data)
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint to get a single post by ID
app.get("/posts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(404).json({ error: "Post not found" });
  }
});

// Endpoint to get a single post by ID
app.get("/", async (req, res) => {
  res.json("hello user");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
