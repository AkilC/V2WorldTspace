const { Pool } = require('pg');

const pool = new Pool({
  user: 'triberworlds',
  host: 'triberworlds.ctbucaxhbloe.us-east-1.rds.amazonaws.com',
  database: 'tworlds',
  password: 'tribeshit!',
  port: 5432,
});

module.exports = pool;
