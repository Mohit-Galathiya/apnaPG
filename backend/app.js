const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const app = express();
const PORT = 5000;
const path = require("path")
// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MySQL Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "apnapg", // Make sure this DB exists
});
// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}_${file.originalname}`;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage: storage });

db.connect((err) => {
  if (err) {
    console.error(" MySQL connection error:", err.message);
    return;
  }
  console.log(" Connected to MySQL database");
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
        res.status(200).json({ result,message:"Login in Sucessfully" });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    });
  });
  

  app.post("/api/addProperty", upload.single("image"), (req, res) => {
    const { name, description, location, address } = req.body;
    const image = req.file ? req.file.filename : null;
  
    const sql = `INSERT INTO property (name, description, location, address, image) VALUES (?, ?, ?, ?, ?)`;
  
    db.query(sql, [name, description, location, address, image], (err, result) => {
      if (err) {
        console.error("Insert error:", err);
        return res.status(500).json({ message: "Failed to add property" });
      }
      res.status(200).json({ message: "Property added successfully" });
    });
  });

  app.get('/api/getPendingProperties', (req, res) => {
    const sql = 'SELECT * FROM property'; // Assuming status column indicates if property is pending
  
    db.query(sql, (err, results) => {
      if (err) {
        console.error('Error fetching pending properties:', err);
        return res.status(500).json({ message: 'Failed to fetch pending properties' });
      }
  
      // Assuming results is an array of properties
      const properties = results.map((property) => ({
        id: property.id,
        name: property.name,
        description: property.description,
        location: property.location,
        address: property.address,
        imageUrl: `/uploads/${property.image}`, // Assuming you have a column for image URL
      }));
      console.log(properties);
      res.status(200).json({ properties });
    });
  });
  app.get("/api/getPropertyById/:id", (req, res) => {
    const propertyId = req.params.id;
  
    const query = `
      SELECT id, name, description, image, location, address, created_at
      FROM property
      WHERE id = ?
    `;
  
    db.query(query, [propertyId], (err, result) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({ message: "Database error" });
      }
  
      if (result.length === 0) {
        return res.status(404).json({ message: "Property not found" });
      }
  
      res.json({ property: result[0] });
    });
  });

  app.get('/locations', (req, res) => {
    const sql = 'SELECT * FROM locations';
    db.query(sql, (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    });
  });
  
  // POST a new location
  app.post('/locations', (req, res) => {
    const { name, description } = req.body;
    const created_at = new Date();
  
    const sql = 'INSERT INTO locations (name, description, created_at) VALUES (?, ?, ?)';
    db.query(sql, [name, description, created_at], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
  
      res.status(201).json({ id: result.insertId, name, description, created_at });
    });
  });
  
  // PUT update a location
  app.put('/locations/:id', (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
  
    const sql = 'UPDATE locations SET name = ?, description = ? WHERE id = ?';
    db.query(sql, [name, description, id], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
  
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Location not found' });
      }
  
      res.json({ id, name, description });
    });
  });
  
  // DELETE a location
  app.delete('/locations/:id', (req, res) => {
    const { id } = req.params;
  
    const sql = 'DELETE FROM locations WHERE id = ?';
    db.query(sql, [id], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
  
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Location not found' });
      }
  
      res.json({ message: 'Location deleted successfully' });
    });
  });
// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
