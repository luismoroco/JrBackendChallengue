import { Pool } from 'pg';

export const pool = new Pool({
  user: 'root', 
  host: 'db',
  password: 'root',
  database: 'db_quotes', 
  port: 5432
});