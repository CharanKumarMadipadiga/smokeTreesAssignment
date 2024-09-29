const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const userRoute = require('./routes/user.route');
const initializeDb = require('./db/index');

dotenv.config();
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Initialize the database once at server startup
let db;
initializeDb()
  .then((database) => {
    db = database;
    console.log('Database initialized');
    
    // Pass the db to the routes via middleware
    app.use((req, res, next) => {
      req.db = db; // Attach db to the request object
      next();
    });

    // Routes
    app.use('/user/api', userRoute);

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to initialize database', error);
    process.exit(1); // Exit the process if DB connection fails
  });
