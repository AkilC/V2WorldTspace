const express = require('express');
const { Server } = require('colyseus');
const { monitor } = require('@colyseus/monitor');
const http = require('http');
const cors = require('cors');
const jwt = require('jsonwebtoken');  // <-- JWT import
const bcrypt = require('bcrypt');

const app = express();
app.use(cors());
app.options('*', cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const server = http.createServer(app);
const gameServer = new Server({ server });

// Define your room
const { MyRoom } = require('./MyRoom');

gameServer.define('my_room', MyRoom)
  .filterBy(['domain']);  // Add a matchmaking filter for the 'domain' attribute

app.use('/colyseus', monitor());

const PORT = process.env.PORT || 3001;
gameServer.listen(PORT, () => console.log(`Colyseus server is listening on port ${PORT}`));


// database setup
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);
const pool = require('./database');

app.use(session({
  store: new pgSession({
    pool: pool,
  }),
  secret: 'your_jwt_secret', // Replace with your own secret key
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 }  // 30 days
}));

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const jwtMiddleware = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, 'your_jwt_secret');
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};


app.post('/register', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (user.rows.length > 0) {
            return res.status(400).json({ error: 'Email already in use' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await pool.query('INSERT INTO users (email, password_hash) VALUES ($1, $2) RETURNING *', [email, hashedPassword]);
        res.json({ success: true, user: newUser.rows[0] });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
      const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
      if (user.rows.length === 0) {
          return res.status(400).json({ error: 'Invalid Credentials' });
      }

      const validPassword = await bcrypt.compare(password, user.rows[0].password_hash);
      if (!validPassword) {
          return res.status(400).json({ error: 'Invalid Credentials' });
      }

      // Generating JWT token after successful login
      const userPayload = { id: user.rows[0].id, email: user.rows[0].email };
      const token = jwt.sign(userPayload, 'your_jwt_secret', { expiresIn: '1h' });
      res.json({ success: true, token });
  } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
  }
});

app.get('/profile', jwtMiddleware, async (req, res) => {
  try {
      const user = await pool.query('SELECT email FROM users WHERE id = $1', [req.user.id]);
      if (user.rows.length === 0) {
          return res.status(400).json({ error: 'User not found' });
      }
      res.json(user.rows[0]);
  } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
  }
});

app.post('/setAvatarColor', jwtMiddleware, async (req, res) => {
  const userId = req.user.id; // Extracting the user ID from the JWT middleware
  const { color } = req.body; // Extracting color from the request body

  try {
      // Check if the user already has a color set
      const existingAttribute = await pool.query('SELECT * FROM avatar_attributes WHERE user_id = $1', [userId]);

      if (existingAttribute.rows.length > 0) {
          // If the user already has a color set, update it
          await pool.query('UPDATE avatar_attributes SET color = $1 WHERE user_id = $2', [color, userId]);
      } else {
          // If the user doesn't have a color set, insert a new row
          await pool.query('INSERT INTO avatar_attributes (user_id, color) VALUES ($1, $2)', [userId, color]);
      }

      res.json({ success: true, message: 'Color updated successfully' });

  } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
  }
});

app.get('/getAvatarColor', jwtMiddleware, async (req, res) => {
  const userId = req.user.id; // Extracting the user ID from the JWT middleware

  try {
      // Fetch the user's color from the database
      const userColor = await pool.query('SELECT color FROM avatar_attributes WHERE user_id = $1', [userId]);

      if (userColor.rows.length > 0) {
          res.json({ success: true, color: userColor.rows[0].color });
      } else {
          res.json({ success: false, message: 'No color set for this user' });
      }

  } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
  }
});


// Add a protected route as an example
app.get('/some_protected_route', jwtMiddleware, (req, res) => {
  res.send("This is a protected route");
});

