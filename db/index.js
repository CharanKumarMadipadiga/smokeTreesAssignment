const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const path = require('path');

// Path to the SQLite DB
const dbPath = path.join(__dirname, '../UserDetails.db');

// Initialize the database
const initializeDb = async () => {
  const db = await open({
    filename: dbPath,
    driver: sqlite3.Database,
  });

  // Create User table
  await db.run(`
    CREATE TABLE IF NOT EXISTS User (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL
    );
  `);

  // Create Address table
  await db.run(`
    CREATE TABLE IF NOT EXISTS Address (
      id TEXT PRIMARY KEY,
      door_no TEXT,
      street TEXT,
      city TEXT,
      pin_code TEXT,
      user_id TEXT,
      FOREIGN KEY(user_id) REFERENCES User(id)
    );
  `);

  console.log('Database and tables created.');
  return db;
};

module.exports = initializeDb;
