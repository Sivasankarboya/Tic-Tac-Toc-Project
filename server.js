
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'tic_tac_toe',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});

// Example API endpoint to get data
app.get('/api/data', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      res.status(500).send('Server error');
    } else {
      res.json(results);
    }
  });
});

// Example API endpoint to insert data
app.post('/api/data', (req, res) => {
  const { name } = req.body;
  db.query('INSERT INTO users (name) (password) VALUES (?)', [name],[password],(err, results) => {
    if (err) {
      res.status(500).send('Server error');
    } else {
      res.status(201).json({ id: results.insertId });
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
