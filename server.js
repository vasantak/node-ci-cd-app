
import express from "express";
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Home API
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Node.js application is running!",
  });
});

// Health Check API
app.get("/health", (req, res) => {
  res.status(200).json({
    timestamp: new Date().toISOString(),
    status: 'success',
    message: 'Updated automatically using CI/CD!',
    server: 'AWS EC2'
  });
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});