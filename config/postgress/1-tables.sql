\c db_quotes

CREATE TABLE IF NOT EXISTS autor (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS quotes ( 
  id SERIAL PRIMARY KEY, 
  quote VARCHAR(255),
  created_at DATE DEFAULT current_date,
  autor_id INTEGER REFERENCES autor(id)
);