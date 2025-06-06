
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Satwick',
  database: 'registration_db'
});

db.connect(err => {
  if (err) throw err;
  console.log('✅ Connected to MySQL');
});

const createTableQuery = `
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255)
)`;

db.query(createTableQuery, (err) => {
  if (err) throw err;
  console.log("✅ Users table ready.");
});

app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  db.query(sql, [username, email, password], (err, result) => {
    if (err) {
      console.error('❌ Error inserting data:', err);
      return res.status(500).send('Error saving data');
    }
    res.send('✅ Registration successful');
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
