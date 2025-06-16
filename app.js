const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3000;

const pool = new Pool({
  user: 'postgres',
  host: 'db-container',
  database: 'postgres',
  password: 'secret',
  port: 5432,
});

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Task Manager Home');
});

app.post('/task', async (req, res) => {
  const { title } = req.body;
  try {
    await pool.query('INSERT INTO tasks (title) VALUES ($1)', [title]);
    res.status(201).send('Task created');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error inserting task');
  }
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});