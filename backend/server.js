const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "apnapg", // Make sure this DB exists
});

db.connect((err) => {
  if (err) {
    console.error("❌ MySQL connection error:", err.message);
    return;
  }
  console.log("✅ Connected to MySQL database");
});

// POST API to Register Guest
app.post("/api/registerGuest", (req, res) => {
  const { firstName, lastName, email, password, contact, street } = req.body;

  const sql = `
    INSERT INTO guest (first_name, last_name, email, password, contact, street)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [firstName, lastName, email, password, contact, street], (err, result) => {
    if (err) {
      console.error("Error inserting guest:", err);
      return res.status(500).json({ message: "Failed to register guest" });
    }
    res.status(200).json({ message: "Guest registered successfully" });
  });
});

app.post("/api/registerOwner", (req, res) => {
  const { firstName, lastName, email, password, contact, street } = req.body;
  const role="owner";
  const sql = `
    INSERT INTO guest (first_name, last_name, email, password, contact, street,role)
    VALUES (?, ?, ?, ?, ?, ?,?)
  `;

  db.query(sql, [firstName, lastName, email, password, contact, street,role], (err, result) => {
    if (err) {
      console.error("Error inserting guest:", err);
      return res.status(500).json({ message: "Failed to register guest" });
    }
    res.status(200).json({ message: "Owner registered successfully" });
  });
});


app.post("/api/loginGuest", (req, res) => {
    const { email, password } = req.body;
  
    const sql = `SELECT * FROM guest WHERE email = ? AND password = ?`;
  
    db.query(sql, [email, password], (err, result) => {
      if (err) {
        console.error("❌ SQL Error:", err);
        return res.status(500).json({ message: "Database error", error: err.message });
      }
  
      if (result.length > 0) {
        res.status(200).json({ message: "Login successful" });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    });
  });
  

  
// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
